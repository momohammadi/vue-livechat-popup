<template>
  <h1>Leave this tab and wait Three second</h1>
  <VueLiveChatPopup
    blink
    icon
    class="whatsapp-chat"
    :attendants="attendants"
    blink-title="🔔We are ready to Answer! 👋 "
    :blink-duration="0"
    :blink-walk-speed="200"
    :blink-delay="runBlinkDelay"
    assets-dir="/assets"
  >
    <template v-slot:header>
      <p>Click one of our representatives below to chat on WhatsApp.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/src/assets/icons/whatsapp.svg"
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
    const runBlinkDelay = 2 // Start blinking the title and open the chat popup 2 seconds after the user leaves the tab
    return { attendants, runBlinkDelay }
  },
}
</script>

<style lang="stylus">

.whatsapp-chat
  .vlcp-popup-header p
    font-weight 500
</style>
