export default [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/Home.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/bale',
    component: () => import('../pages/Bale.vue')
  },
  {
    path: '/eitaa',
    component: () => import('../pages/Eitaa.vue')
  },
  {
    path: '/whatsapp',
    component: () => import('../pages/WhatsApp.vue')
  },
  {
    path: '/messeger',
    component: () => import('../pages/Messeger.vue')
  },
  {
    path: '/telegram',
    component: () => import('../pages/Telegram.vue')
  },
  {
    path: '/wechat',
    component: () => import('../pages/WeChat.vue')
  },
  {
    path: '/twitter',
    component: () => import('../pages/Twitter.vue')
  },
  {
    path: '/viber',
    component: () => import('../pages/Viber.vue')
  },
  {
    path: '/line',
    component: () => import('../pages/Line.vue')
  },
  {
    path: '/email',
    component: () => import('../pages/Email.vue')
  },
  {
    path: '/mixed',
    component: () => import('../pages/Mixed.vue')
  },
  {
    path: '/custom',
    component: () => import('../pages/Custom.vue')
  },
  {
    path: '/rtl',
    component: () => import('../pages/RTL.vue')
  },
  {
    path: '/default-open',
    component: () => import('../pages/DefaultOpen.vue')
  }
]
