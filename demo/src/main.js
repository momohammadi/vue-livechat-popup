import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLiveChatPopup from '../../src'

createApp(App)
  .use(VueLiveChatPopup)
  .use(router)
  .mount('#app')
