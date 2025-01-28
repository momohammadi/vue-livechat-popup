<template>
  <h1>Twitter click to chat</h1>
  <h2>Example: Without slot header and footer</h2>
  <VueLiveChatPopup icon class="twitter-chat" :attendants="attendants">
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/src/assets/icons/twitter.svg"
        alt="icon twitter"
        aria-hidden="true"
      />
    </template>
  </VueLiveChatPopup>
</template>

<script>
export default {
  name: 'TwittePage',
  setup() {
    const attendants = [
      {
        app: 'twitter',
        label: 'Support',
        name: 'John Doe',
        id: '7709762080',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/64.jpg',
          alt: 'John Doe avatar',
        },
      },
      {
        app: 'twitter',
        label: 'Sales',
        name: 'Alex Smith',
        id: '27156495',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/3.jpg',
          alt: 'Alex Smith avatar',
        },
      },
      {
        app: 'twitter',
        label: 'Developer',
        name: 'Jordan Williams',
        id: '27156495',
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
