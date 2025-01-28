<template>
  <h1>Text button and mixed app chats in list</h1>
  <VueLiveChatPopup :attendants="attendants">
    <template v-slot:header>
      <p style="font-weight: 500">
        Click one of our representatives below to chat
      </p>
    </template>
    <template v-slot:button="{ open }">
      <span v-show="!open">Contact us</span>
      <span v-show="open">Close</span>
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
        app: 'telegram',
        label: 'Developer',
        name: 'Jordan Williams',
        username: 'JordanWilliams',
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
