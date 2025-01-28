<template>
  <h1>Messeger click to chat demo</h1>
  <h2>Example: Custom header color</h2>
  <VueLiveChatPopup icon class="messenger-chat" :attendants="attendants">
    <template v-slot:header>
      <p>Click one of our representatives below to chat on Messeger.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/master/src/icons/messenger.svg"
        alt="icon messenger"
        aria-hidden="true"
      />
    </template>
    <template v-slot:footer>
      <small>
        Call us to
        <a href="tel:+55988656544" title="Call us"> +55 95865-6544 </a>
        from 8:00hs a 18:00hs
      </small>
    </template>
  </VueLiveChatPopup>
</template>

<script>
export default {
  name: 'MessegerPage',
  setup() {
    const attendants = [
      {
        app: 'messenger',
        label: 'Support',
        name: 'John Doe',
        id: '100004825963765',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/64.jpg',
          alt: 'John Doe avatar',
        },
      },
      {
        app: 'messenger',
        label: 'Sales',
        name: 'Alex Smith',
        id: '100004825963765',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/3.jpg',
          alt: 'Alex Smith avatar',
        },
      },
      {
        app: 'messenger',
        label: 'Developer',
        name: 'Jordan Williams',
        id: '10000461979233',
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
.messenger-chat
  .vlcp-popup-header p
    font-weight 500
</style>
