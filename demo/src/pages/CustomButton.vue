<template>
  <h1>
    Popup chat opens when click on bellow button or
    <a
      href="#"
      @click="openOnClick = !openOnClick"
      onclick="event.preventDefault()"
      style="text-decoration: underline; font-weight: 600"
      >this link</a
    >
  </h1>
  <button @click="openOnClick = !openOnClick">click here</button>
  <VueLiveChatPopup
    icon
    :open="openOnClick"
    class="whatsapp-chat"
    :attendants="attendants"
  />
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
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
    const openOnClick = ref(false)
    return { attendants, openOnClick }
  },
}
</script>

<style lang="stylus">

.whatsapp-chat
  .vlcp-popup-header p
    font-weight 500

button
    background #d40909
    color white
    border none
    padding 10px 20px
    border-radius 5px
    cursor pointer
    font-size 16px
    transition background 0.3s

    &:hover
      background #ba0d0d
</style>
