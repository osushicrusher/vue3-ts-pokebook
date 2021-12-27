import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from "pinia"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay, faSearch, faTimesCircle)


createApp(App).component('fa', FontAwesomeIcon ).use(createPinia()).mount("#app")

