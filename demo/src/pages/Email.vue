<template>
  <h1>Email click to chat demo</h1>
  <VueLiveChatPopup icon class="email-chat" :attendants="attendants">
    <template v-slot:header>
      <p>Click one of our representatives below to send Email.</p>
    </template>
    <template v-slot:button>
      <img
        src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/src/assets/icons/email.svg"
        alt="icon email"
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
  name: 'EmailPage',
  setup() {
    const attendants = [
      {
        label: 'Support',
        name: 'John Doe',
        href: 'mailto:johndoe@gmail.com?subject=Testing out mailto!',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/64.jpg',
          alt: 'John Doe avatar',
        },
      },
      {
        label: 'Sales',
        name: 'Alex Smith',
        href: 'mailto:alexsmith@gmail.com?subject=Testing out mailto!',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/3.jpg',
          alt: 'Alex Smith avatar',
        },
      },
      {
        label: 'Developer',
        name: 'Jordan Williams',
        href: 'mailto:jordanwilliams@gmail.com?subject=Testing out mailto!',
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
