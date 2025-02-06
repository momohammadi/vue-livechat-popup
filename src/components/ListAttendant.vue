<template>
  <ul class="vlcp-popup-body__list">
    <li
      v-for="(attendant, index) in attendants"
      :key="`vlcp-item-${index}`"
      class="vlcp-popup-body__list-item"
    >
      <a
        :href="attendant.href"
        rel="noopener"
        target="_blank"
        class="vlcp-popup-body__link"
        :aria-label="`Contact ${attendant.name}, opens in a new window`"
      >
        <div class="vlcp-popup-body__link-avatar">
          <img
            :src="attendant.avatar.src"
            :alt="attendant.avatar.alt"
            loading="lazy"
          />
          <span
            class="vlcp-popup-body__link-avatar-brand"
            :style="
              attendant.app
                ? { backgroundImage: `url(${appLogo(attendant.app)})` }
                : ''
            "
          />
        </div>
        <div class="vlcp-popup-body__link-info">
          <span
            class="vlcp-popup-body__link-info__label"
            v-text="attendant.label"
          />
          <span
            class="vlcp-popup-body__link-info__name"
            v-text="attendant.name"
          />
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ListAttendant',
  props: {
    urlAsset: String,
    assetsDir: String,
    attendants: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    appLogo(name) {
      if (this.assetsDir != undefined) {
        // Example implementation
        return `${this.assetsDir}/${name}.png`
      } else {
        return `${this.urlAsset}/logos/${name}.png`
      }
    },
  },
})
</script>
