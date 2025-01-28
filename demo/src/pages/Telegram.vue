<template>
  <h1>Telegram click to chat (without slot footer)</h1>
  <h2>Example: Without slot footer</h2>
  <VueLiveChatPopup icon class="telegram-chat" :attendants="attendants">
    <template v-slot:header>
      <p>Click one of our representatives below to chat on Telegram.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/src/assets/icons/telegram.svg"
        alt="icon telegram"
        aria-hidden="true"
      />
    </template>
  </VueLiveChatPopup>
</template>

<script>
export default {
  name: 'TelegramPage',
  setup() {
    const attendants = [
      {
        app: 'telegram',
        label: 'Support',
        name: 'John Doe',
        username: 'JohnDoe',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/64.jpg',
          alt: 'John Doe avatar',
        },
      },
      {
        app: 'telegram',
        label: 'Sales',
        name: 'Alex Smith',
        username: 'AlexSmith',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/74.jpg',
          alt: 'Alex Smith avatar',
        },
      },
      {
        app: 'telegram',
        label: 'Developer',
        name: 'Jordan Williams',
        username: 'JordanWilliams',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/71.jpg',
          alt: 'Jordan Williams avatar',
        },
      },
    ]

    return { attendants }
  },
}
</script>
