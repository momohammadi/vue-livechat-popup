<template>
  <header>
    <h1>
      <a
        href="https://github.com/momohammadi/vue-livechat-popup"
        title="Vue Livechat popup for Vue 3"
        rel="noopener noreferer"
        target="_blank"
      >
        VueLiveChatPopup for Vue 3
      </a>
    </h1>
    <nav-list />
  </header>
  <main class="main">
    <hr />
    <router-view />
  </main>
  <OpenOnPagesVisit />
</template>

<script>
import { defineComponent } from 'vue'
import NavList from './components/NavList.vue'
import OpenOnPagesVisit from './components/OpenOnPagesVisit.vue'
export default defineComponent({
  name: 'App',
  components: {
    'nav-list': NavList,
    OpenOnPagesVisit: OpenOnPagesVisit,
  },
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

.logo
  width 200px
  transition .5s all
  will-change filter
  &:hover
    transform translateY(-10px)
    filter drop-shadow(0px 14px 5px #00000055)

hr
  opacity .4

a
  color #227952
  text-decoration none
  &:hover
    text-decoration underline
</style>
