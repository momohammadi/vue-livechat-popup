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
    name: 'bale',
    component: () => import('../pages/Bale.vue')
  },
  {
    path: '/eitaa',
    name: 'eitaa',
    component: () => import('../pages/Eitaa.vue')
  },
  {
    path: '/whatsapp',
    name: 'whatsapp',
    component: () => import('../pages/WhatsApp.vue')
  },
  {
    path: '/messeger',
    name: 'messenger',
    component: () => import('../pages/Messeger.vue')
  },
  {
    path: '/telegram',
    name: 'telegram',
    component: () => import('../pages/Telegram.vue')
  },
  {
    path: '/wechat',
    name: 'wechat',
    component: () => import('../pages/WeChat.vue')
  },
  {
    path: '/twitter',
    name: 'twitter',
    component: () => import('../pages/Twitter.vue')
  },
  {
    path: '/viber',
    name: 'viber',
    component: () => import('../pages/Viber.vue')
  },
  {
    path: '/line',
    name: 'line',
    component: () => import('../pages/Line.vue')
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('../pages/Email.vue')
  },
  {
    path: '/mixed',
    name: 'mixed',
    component: () => import('../pages/Mixed.vue')
  },
  {
    path: '/custom',
    name: 'custom',
    component: () => import('../pages/Custom.vue')
  },
  {
    path: '/rtl',
    name: 'rtl',
    component: () => import('../pages/RTL.vue')
  },
  {
    path: '/default-open',
    name: 'defaultOpen',
    component: () => import('../pages/DefaultOpen.vue')
  },
  {
    path: '/auto-open',
    name: 'autoOpen',
    component: () => import('../pages/AutoOpen.vue')
  },
  {
    path: '/custom-button',
    name: 'customButton',
    component: () => import('../pages/CustomButton.vue')
  },
  {
    path: '/open-route',
    name: 'openOnRouteName',
    component: () => import('../pages/OpenOnRouteName.vue')
  }
]
