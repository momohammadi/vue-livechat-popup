<template>
  <h1>Line click to chat demo</h1>
  <VueLiveChatPopup icon class="line-chat" :attendants="attendants">
    <template v-slot:header>
      <p>Click one of our representatives below to chat on Line.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/master/src/icons/line.svg"
        alt="icon line"
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
  name: 'LinePage',
  setup() {
    const attendants = [
      {
        app: 'line',
        label: 'Support',
        name: 'John Doe',
        username: '@linedevelopers',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/64.jpg',
          alt: 'John Doe avatar',
        },
      },
      {
        app: 'line',
        label: 'Sales',
        name: 'Alex Smith',
        username: '@linedevelopers',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/3.jpg',
          alt: 'Alex Smith avatar',
        },
      },
      {
        app: 'line',
        label: 'Developer',
        name: 'Jordan Williams',
        username: '@linedevelopers',
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
