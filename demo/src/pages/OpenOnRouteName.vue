<template>
  <h1>open popup on specific page</h1>
  <VueLiveChatPopup
    icon
    :open-on-route-name="['/open-route']"
    class="whatsapp-chat"
    :attendants="attendants"
  >
    <template #header>
      <p>
        This chat popup opens automatically because you navigated to the
        open-route page.
      </p>
    </template>
  </VueLiveChatPopup>
</template>

<script>
export default {
  name: 'OpenOnRouteName',
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
