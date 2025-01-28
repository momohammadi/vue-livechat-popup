# Vue LiveChat Popup

Vue Livechat Popup is a simple and powerful Vue.js plugin that enables you to easily create an attractive live chat popup for your website. It supports popular messaging platforms such as WhatsApp, Telegram, and Messenger, which allow you to connect directly with your users.

This lightweight and flexible plugin requires no server or additional account setup. With just a few simple configurations, you can enhance the user experience and improve customer interactions on your website.

Vue Livechat Popup is the perfect solution for websites of all sizes, offering an effortless way to engage with visitors through popular messaging services.

## Table of Contents
- [Vue LiveChat Popup](#vue-livechat-popup)
  - [Table of Contents](#table-of-contents)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
  - [Custom style](#custom-style)
  - [Props](#props)
  - [Events](#events)
      - [example:](#example)
  - [Slots](#slots)
    - [header](#header)
    - [body](#body)
      - [tips](#tips)
    - [footer](#footer)
    - [button](#button)
  - [Thanks to Ktquez](#thanks-to-ktquez)
  - [Contributing](#contributing)
  - [License](#license)


# Demo
Visit our demo at [Demo](https://vue-livechat-popup.surge.sh/) and explore the Demo directory within the repository to see various sample usage codes.


# Installation

To install the component, you can use npm:

```bash
npm install vue-livechat-popup
```

# Usage

First, import the CSS file in your Vue.js application:

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import 'vue-livechat-popup/dist/style.css'

createApp(App)
  .use(VueSocialChat)
  .mount('#app')
 ```

Then, use the component in your template:

```javascript
<script setup>
   import { VueLiveChatPopup } from 'vue-livechat-popup'

    const attendants = [
      {
        app: 'telegram',
        label: 'Support',
        name: 'John Doe',
        username: 'JohnDoe',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/64.jpg',
          alt: 'John Doe avatar',
        },
      },
      {
        app: 'telegram',
        label: 'Sales',
        name: 'Alex Smith',
        username: 'AlexSmith',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/74.jpg',
          alt: 'Alex Smith avatar',
        },
      },
      {
        app: 'telegram',
        label: 'Developer',
        name: 'Jordan Williams',
        username: 'JordanWilliams',
        avatar: {
          src: 'https://randomuser.me/api/portraits/men/71.jpg',
          alt: 'Jordan Williams avatar',
        },
      },
    ]
</script>

<template>
  <VueLiveChatPopup 
  icon 
  class="telegram-chat"
  :attendants="attendants"
  assets-dir="/images"
  >
    <template #header>
      <p>Click one of our representatives below to chat on Bale.</p>
    </template>
    <template #button>
      <img
        src="/assets/icons/telegram.svg"
        alt="icon telegram"
        aria-hidden="true"
      />
    </template>
  </VueLiveChatPopup>
</template>
```
## Custom style
`vue-livechat-popup` uses CSS variables, so you can customize it with the colors you want.

```css
--vsc-bg-header
--vsc-bg-footer
--vsc-text-color-header
--vsc-text-color-footer
--vsc-bg-button
--vsc-text-color-button
--vsc-outline-color
--vsc-border-color-bottom-header
--vsc-border-color-top-footer
```

## Props

| Prop Name | Type   | Default | Description                       |
|-----------|--------|---------|-----------------------------------|
| `icon`    | Boolean | `true`  | enable/disable showing icon on popup button      |
| `attendants`   | Array | `[]`   | List of attendants to show in popup as live chat agents|
| `assetsDir`  | String | `not set`   | your public assets directory to show apps logo, if not set will be using our github repo to host app logo     |
| `dir`  | String | `ltr`   | set **rtl** to use rtl style .     |

## Events
VueLiveChatPopup triggers events ($emit) when opening and closing the popup.

| Event Name | Description                       |
|------------|-----------------------------------|
| `open`     | Emitted when the popup is opened.  |
| `close`    | Emitted when the popup is closed.  |

#### example:
```js
<template>
  <div class='layout'>
    <!-- ommited -->
    <VueLiveChatPopup
      @open="$analytics.fbq('trackCustom', 'WhatsAppChat', { event: 'Chat Open' })"
      @close="$analytics.fbq('trackCustom', 'WhatsAppChat', { event: 'Chat Close' })"
    >
      <!-- ommited -->
    </VueLiveChatPopup>
  </div>
</template> 
```
## Slots
### header
Add content at the top of the popup
```js
<template #header>
  <p>Click on one of our attendants below to chat on WhatsApp.</p>
</template>
```
### body
Used to customize what will appear in the body of the popup.
```js
<template #body>
  your content here
</template>
```
#### tips
See custom body with [newsletter form demo](https://vue-livechat-popup.surge.sh/custom).

### footer
Add content at the bottom of the popup

```js
 <template #footer>
  <small>Opening hours: 8am to 6pm</small>
</template>
```
### button
Add icons or text to the button that triggers the popup

```js
<template #button>
  <img 
  src="https://raw.githubusercontent.com/momohammadi/vue-livechat-popup/main/src/assets/icons/telegram.svg"
    alt="icon telegram"
    aria-hidden="true"
  />
</template>
```

## Thanks to Ktquez
this plugin write based on [this repository](https://github.com/ktquez/vue-social-chat/) with many changes and some localization


## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

For more information, visit the [GitHub repository](https://github.com/momohammadi/vue-livechat-popup).