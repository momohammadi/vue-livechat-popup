<template>
  <h1>WeChat click to chat</h1>
  <h2>Example: without slot header</h2>
  <VueLiveChatPopup icon class="wechat-chat" :attendants="attendants">
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/src/assets/icons/wechat.svg"
        alt="icon wechat"
        aria-hidden="true"
      />
    </template>
    <template v-slot:footer>
      <small>
        Call us to
        <a href="tel:+55988656544" title="Call us">+55 95865-6544</a>
        from 8:00hs a 18:00hs
      </small>
    </template>
  </VueLiveChatPopup>
</template>

<script>
export default {
  name: 'WeChatPage',
  setup() {
    const attendants = [
      {
        app: 'wechat',
        label: 'Support',
        name: 'John Doe',
        id: '890',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/64.jpg',
          alt: 'John Doe avatar',
        },
      },
      {
        app: 'wechat',
        label: 'Sales',
        name: 'Alex Smith',
        id: '6235',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/3.jpg',
          alt: 'Alex Smith avatar',
        },
      },
      {
        app: 'wechat',
        label: 'Developer',
        name: 'Jordan Williams',
        id: '567',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/78.jpg',
          alt: 'Jordan Williams avatar',
        },
      },
    ]

    return { attendants }
  },
}
</script>
