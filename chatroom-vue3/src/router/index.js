import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register/Register.vue')
    },
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../views/Layout/Layout.vue'),
      redirect: '/layout/contacts',
      children: [
        {
          path: '/layout/chat',
          name: 'null',
          component: () => import('../views/Chat/Chat.vue')
        },
        {
          path: '/layout/contacts',
          name: 'contacts',
          component: () => import('../views/Contacts/Contacts.vue'),
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
              path: '/layout/contacts/userdetails',
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
