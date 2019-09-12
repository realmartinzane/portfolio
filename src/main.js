import Vue from 'vue'
import App from './App.vue'
import './scss/app.scss'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faCode, faPortrait, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEye, faCode, faGithub, faLinkedin, faEnvelope, faPortrait, faTimes)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
