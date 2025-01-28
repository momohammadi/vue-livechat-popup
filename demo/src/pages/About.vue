<template>
  <h2>About</h2>
  <p>
    <b>vue-livechat-popup</b> enables your customers to initiate a conversation
    from your website directly to chat applications such as WhatsApp, Telegram,
    Messenger, WeChat, Line, Viber, or even a custom form.
  </p>
  <p>
    Since most people use chat apps, providing your customers with a direct
    contact option helps convert visitors into customers, as well as generating
    leads to boost your sales or disseminate your content.
  </p>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'About',
  setup() {
    onMounted(() => {
      document.title = 'About - Vue livechat popup'
    })
  },
})
</script>
