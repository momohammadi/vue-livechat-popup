<template>
  <h1>Popup chat opens automatically after {{ counter }} seconds</h1>

  <VueLiveChatPopup
    icon
    :open="autoOpen"
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
    let intervalId = null
    const counter = ref(10)
    const autoOpen = ref(false)
    onMounted(() => {
      intervalId = setInterval(() => {
        if (counter.value > 0) {
          counter.value -= 1
        } else {
          clearInterval(intervalId)
          autoOpen.value = true
        }
      }, 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(intervalId)
    })

    return { attendants, autoOpen, counter }
  },
}
</script>

<style lang="stylus">

.whatsapp-chat
  .vlcp-popup-header p
    font-weight 500
</style>
