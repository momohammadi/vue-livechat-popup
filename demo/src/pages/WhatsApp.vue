<template>
  <h1>Whatsapp click to chat demo</h1>
  <VueLiveChatPopup icon class="whatsapp-chat" :attendants="attendants">
    <template v-slot:header>
      <p>Click one of our representatives below to chat on WhatsApp.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/master/src/icons/whatsapp.svg"
        alt="icon whatsapp"
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
  name: 'WhatsAppPage',
  setup() {
    const attendants = [
      {
        app: 'whatsapp',
        label: 'Support',
        name: 'John Doe',
        number: '6776967482776',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/64.jpg',
          alt: 'John Doe avatar',
        },
      },
      {
        app: 'whatsapp',
        label: 'Sales',
        name: 'Alex Smith',
        number: '6776967482776',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/3.jpg',
          alt: 'Alex Smith avatar',
        },
      },
      {
        app: 'whatsapp',
        label: 'Developer',
        name: 'Jordan Williams',
        number: '6776967482776',
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

<style lang="stylus">

.whatsapp-chat
  .vlcp-popup-header p
    font-weight 500
</style>
