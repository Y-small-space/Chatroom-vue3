import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login/index.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register/index.vue')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../views/Layout/index.vue'),
      redirect: '/layout/contacts',
      children: [
        {
          path: '/layout/chat',
          name: 'chat',
          component: () => import('../views/Chat/index.vue')
        },
        {
          path: '/layout/contacts',
          name: 'contacts',
          component: () => import('../views/Contacts/index.vue'),
          redirect: '/layout/contacts/null',
          children: [
            {
              path: '/layout/contacts/null',
              name: 'null',
              component: () => import('../views/Contacts/components/Null.vue')
            },
            {
              path: '/layout/contacts/searchuserpage',
              name: 'searchuserpage',
              component: () =>
                import('../views/Contacts/components/SearchUserPage.vue')
            },
            {
              path: '/layout/contacts/userdetails/:userId',
              name: 'userdetails',
              component: () =>
                import('../views/Contacts/components/UserDetails.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
