<template>
  <FocusLoop class="vlcp-container" :disabled="!show">
    <div ref="vlcpPopup" class="vlcp-popup" :dir="dir">
      <transition name="scale">
        <div v-show="show" id="vlcp-popup-box" class="vlcp-popup-box">
          <div v-show="$slots.header" class="vlcp-popup-header">
            <slot name="header" />
          </div>
          <div class="vlcp-popup-body">
            <slot name="body">
              <ListAttendant
                :assets-dir="assetsDir"
                :url-asset="urlAssets"
                :attendants="getAttendants"
              />
            </slot>
          </div>
          <div v-show="$slots.footer" class="vlcp-popup-footer">
            <slot name="footer" />
          </div>
        </div>
      </transition>
      <button
        ref="vlcpButton"
        class="vlcp-popup-button vlcp-popup-button--default"
        :class="{ 'vlcp-popup-button--no-icon': !icon }"
        aria-haspopup="true"
        aria-controls="vlcp-popup-box"
        :aria-expanded="show ? 'true' : 'false'"
        :aria-label="ariaLabelButton"
        :title="ariaLabelButton"
        @click="togglePopup"
      >
        <span v-show="!show || !icon">
          <slot name="button" :open="show">
            <img
              :src="`${buttonIcon('chat')}`"
              alt="chat icon"
              aria-hidden="true"
              loading="lazy"
            />
          </slot>
        </span>
        <span v-show="show || !icon">
          <slot name="close">
            <img
              :src="`${buttonIcon('close')}`"
              alt="close icon"
              aria-hidden="true"
              loading="lazy"
            />
          </slot>
        </span>
      </button>
    </div>
  </FocusLoop>
</template>

<script>
import {
  getCurrentInstance,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  onUnmounted,
} from 'vue'
import ListAttendant from './ListAttendant.vue'
import { FocusLoop } from '@vue-a11y/focus-loop'
import { URL_ASSETS, HREF_BY_APP } from '../constants'

export default defineComponent({
  name: 'VueLiveChatPopup',

  components: {
    ListAttendant,
    FocusLoop,
  },

  props: {
    /** Determines whether the chat icon should be displayed */
    icon: {
      type: Boolean,
      default: false,
    },

    /** List of attendants available in the chat */
    attendants: {
      type: Array,
      default: () => [],
    },

    /** Directory path for assets */
    assetsDir: {
      type: String,
      required: false,
    },

    /** Direction of text (LTR or RTL) */
    dir: {
      type: String,
      default: 'ltr',
    },

    /** Controls whether the popup is initially open */
    open: {
      type: Boolean,
      default: false,
    },

    /** Time delay before automatically opening the popup (in seconds) */
    timeToOpen: {
      type: Number,
      required: false,
    },

    /** List of route names where the popup should automatically open */
    openOnRouteName: {
      type: Array,
      required: false,
    },

    /** Number of page views before the popup should appear */
    numberPageView: {
      type: Number,
      required: false,
    },
  },
  methods: {
    /** Generates the URL for a button icon */
    buttonIcon(name) {
      if (this.assetsDir != undefined) {
        return `${this.assetsDir}/${name}.svg`
      } else {
        return `${this.urlAssets}/icons/${name}.svg`
      }
    },
  },
  computed: {
    /** Returns an accessible label for the chat button */
    ariaLabelButton() {
      return `${this.show ? 'Close' : 'Open'} livechat popup`
    },

    /** Processes the list of attendants and assigns correct href links */
    getAttendants() {
      return this.attendants.map((attendant) => {
        const href = attendant.app
          ? HREF_BY_APP[attendant.app].replace(
              '%ph%',
              attendant.number || attendant.id || attendant.username
            )
          : attendant.href
        return { ...attendant, href }
      })
    },
  },
  setup(props, { emit }) {
    const show = ref(props.open)
    const urlAssets = ref(URL_ASSETS)
    const vlcpPopup = ref(null)
    const vlcpButton = ref(null)
    const currentRoute = ref(window.location.pathname)
    const visitedPages = ref(
      JSON.parse(localStorage.getItem('VLCP_visitedPages')) || []
    )

    onBeforeUnmount(() => {
      removeEventListeners()
    })

    /** Handles automatic popup toggling */
    function autoPopUpToggle(event, state) {
      if (event) {
        document.addEventListener('click', closeClickOutside)
        document.addEventListener('keydown', closeKeydownEsc)
      } else {
        show.value = state
        if (!show.value) return emit('close')
        emit('open')
      }
    }

    watch(show, (val) => {
      if (!val) return removeEventListeners()
      document.addEventListener('click', closeClickOutside)
      document.addEventListener('keydown', closeKeydownEsc)
    })

    watch(
      () => props.open,
      (newVal) => {
        autoPopUpToggle(event, newVal)
      }
    )

    if (typeof props.timeToOpen === 'number') {
      setTimeout(() => {
        autoPopUpToggle(event, true)
      }, props.timeToOpen * 1000)
    }

    /** Toggles the chat popup visibility */
    function togglePopup() {
      show.value = !show.value
      setTimeout(() => vlcpButton.value.blur(), 500)
      if (!show.value) return emit('close')
      emit('open')
    }

    /** Closes the popup when clicking outside */
    function closeClickOutside({ target }) {
      if (!vlcpPopup.value.contains(target)) {
        togglePopup()
      }
    }

    /** Closes the popup when pressing the Escape key */
    function closeKeydownEsc({ which }) {
      if (which === 27) togglePopup()
    }

    /** Removes event listeners to prevent memory leaks */
    function removeEventListeners() {
      document.removeEventListener('click', closeClickOutside)
      document.removeEventListener('keydown', closeKeydownEsc)
    }

    /** Tracks visited pages and manages popup display based on views */
    const updateVisitedPages = () => {
      if (!visitedPages.value.includes(currentRoute.value)) {
        visitedPages.value.push(currentRoute.value)
        localStorage.setItem(
          'VLCP_visitedPages',
          JSON.stringify(visitedPages.value)
        )
      }
      if (visitedPages.value.length >= props.numberPageView) {
        localStorage.removeItem('VLCP_visitedPages')
        visitedPages.value = []
        autoPopUpToggle(event, true)
      }
    }

    let observer

    onMounted(() => {
      observer = new MutationObserver(() => {
        if (window.location.pathname !== currentRoute.value) {
          currentRoute.value = window.location.pathname
          updateVisitedPages()
        }
      })

      observer.observe(document.body, { childList: true, subtree: true })
    })

    onUnmounted(() => {
      if (observer) observer.disconnect()
    })

    if (Array.isArray(props.openOnRouteName)) {
      props.openOnRouteName.forEach((route) => {
        if (currentRoute.value.includes(route)) {
          setTimeout(() => {
            autoPopUpToggle(event, true)
          }, 500)
        }
      })
    }

    return {
      show,
      urlAssets,
      vlcpPopup,
      vlcpButton,
      togglePopup,
      visitedPages,
    }
  },
})
</script>

<style lang="stylus">
$defaultColor = #333

:root
  --vlcp-bg-header $defaultColor
  --vlcp-bg-footer #fafafa
  --vlcp-text-color-header white
  --vlcp-text-color-footer inherit
  --vlcp-bg-button $defaultColor
  --vlcp-text-color-button white
  --vlcp-outline-color $defaultColor
  --vlcp-border-color-bottom-header transparent
  --vlcp-border-color-top-footer #f3f3f3

.vlcp-container
  &.bale-chat
    --bale #0aca9b
    --vlcp-bg-header var(--bale)
    --vlcp-bg-button var(--bale)
    --vlcp-outline-color var(--bale)

  &.eitaa-chat
    --eitaa #EF7F1A
    --vlcp-bg-header var(--eitaa)
    --vlcp-bg-button var(--eitaa)
    --vlcp-outline-color var(--eitaa)

  &.telegram-chat
    --telegram #039be5
    --vlcp-bg-header var(--telegram)
    --vlcp-bg-button var(--telegram)
    --vlcp-outline-color var(--telegram)

  &.twitter-chat
    --twitter #55acee
    --vlcp-bg-header var(--twitter)
    --vlcp-bg-button var(--twitter)
    --vlcp-outline-color var(--twitter)

  &.whatsapp-chat
    --whatsapp #46c056
    --vlcp-bg-header var(--whatsapp)
    --vlcp-bg-button var(--whatsapp)
    --vlcp-outline-color var(--whatsapp)
    --vlcp-border-color-bottom-header #289D37

  &.wechat-chat
    --wechat #00ba59
    --vlcp-bg-header var(--wechat)
    --vlcp-bg-button var(--wechat)
    --vlcp-outline-color var(--wechat)

  &.viber-chat
    --viber #6f3faa
    --vlcp-bg-header var(--viber)
    --vlcp-bg-button var(--viber)
    --vlcp-outline-color var(--viber)

  &.messenger-chat
    --messenger #039be5
    --vlcp-bg-header var(--messenger)
    --vlcp-bg-button var(--messenger)
    --vlcp-outline-color var(--messenger)
    --vlcp-border-color-bottom-header #0085C7

  &.line-chat
    --line #22ba4f
    --vlcp-bg-header var(--line)
    --vlcp-bg-button var(--line)
    --vlcp-outline-color var(--line)

.vlcp-popup *
  box-sizing border-box
  padding 0
  margin 0

.vlcp-popup
  position fixed
  z-index 999
  right 20px
  bottom 20px
  display flex
  flex-wrap wrap
  justify-content flex-end
  max-width 380px
  margin-left 20px
  -webkit-font-smoothing antialiased

  &[dir="ltr"]
    text-align left

  &[dir="rtl"]
    left 20px
    right auto
    display flex
    flex-wrap wrap
    justify-content flex-end

    .vlcp-popup-box
      transform-origin bottom left

    .vlcp-popup-body .vlcp-popup-body__link-info
      padding-left 0
      padding-right 10px

  &-box
    transition transform .3s ease-in-out, opacity .2s, visibility .2s
    transform-origin bottom right
    transform scale3d(1,1,1)
    border-radius 10px
    margin-bottom 10px
    box-shadow 0 5px 25px -5px rgba(45,62,79,0.15)
    background-color #fbfbfb
    border var(--vlcp-border-default)
    overflow hidden

  .scale-enter-active, .scale-leave-active
    transform scale3d(0,0,0)

  &-header
    padding 22px 18px
    border-bottom 5px solid var(--vlcp-border-color-bottom-header)
    background-color var(--vlcp-bg-header)
    color var(--vlcp-text-color-header)

  &-body
    padding 14px
    background-color white
    max-height 300px
    overflow auto

    &__list
      list-style none
      display flex
      flex-wrap wrap

      &-item
        width 100%

        &:not(:last-child)
          border-bottom 1px solid #fbfbfb

    &__link
      outline none
      display flex
      padding 10px 18px
      text-decoration none
      color #333
      letter-spacing .2px
      margin 1.5px 0
      border-radius 10px
      text-decoration none !important

      &:hover, &:focus
        background-color #fbfbfb

      &:focus
        box-shadow 0 0 0 3px var(--vlcp-outline-color)

      &-avatar
        position relative
        width 62px
        height 62px

        & > img
          width 100%
          height 100%
          object-fit cover
          border-radius 50%

        &-brand
          position absolute
          right 2px
          bottom 2px
          width 15px
          height 15px
          background-repeat no-repeat
          background-size contain

      &-info
        padding-top 12px
        padding-left 12px

        & > span
          display block
          line-height 1rem

        &__label
          font-size 12px

        &__name
          font-weight bold
          margin-top 2px
          font-size 18px

  &-footer
    padding 16px
    border-top 1px solid var(--vlcp-border-color-top-footer)
    background-color var(--vlcp-bg-footer)
    color var(--vlcp-text-color-footer)

  &-button
    outline none
    appearance none
    -webkit-appearance none
    -moz-appearance none
    background-color transparent
    color var(--vlcp-text-color-button)
    border none
    cursor pointer
    border-radius 50%
    width 60px
    height 60px
    display inline-block
    padding-top 2px
    box-shadow 0 3px 10px rgba(0,0,0,0.2)
    font-family inherit
    transition background-color .3s, box-shadow .2s

    &--default
      background-color var(--vlcp-bg-button)

    &--no-icon
      border-radius 30px
      height auto
      width auto
      padding 14px 20px

    &:focus, &:hover
      box-shadow 0 0 0 3px white, 0 0 0 6px var(--vlcp-outline-color)

@media(prefers-reduced-motion: reduce)
  .vlcp-popup *
    transition none
</style>
