<template>
  <h2>Welcome</h2>
  <p>
    Vue livechat popup is a Vue.js plugin helps you effortlessly create a
    beautiful popup for your live chat section on your website using messaging
    services like WhatsApp, Telegram, Messenger, etc., without the need for any
    server or account.
  </p>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(() => {
      document.title = 'VueLiveChatPopup for Vue 3'
    })
  },
})
</script>
