<template>
  <VueLiveChatPopup
    icon
    :number-page-view="8"
    class="whatsapp-chat"
    :attendants="attendants"
    dir="rtl"
    @open="handle('open')"
    @close="handle('close')"
    v-show="display == 'visible'"
  >
    <template #header>
      <p>This popup chat opened because you've visited more than 8 pages</p>
    </template>
    <template #footer>
      <p>
        In the demo version, I hide this when it’s closed to make the
        functionality clearer
      </p>
    </template>
  </VueLiveChatPopup>
</template>
<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'OpenOnPagesVisit',
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
    const display = ref('invisible')
    const handle = (state) => {
      display.value = state == 'open' ? 'visible' : 'invisible'
    }
    return { attendants, handle, display }
  },
})
</script>
