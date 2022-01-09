import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createPinia } from "pinia"

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faPlay, faSearch, faTimesCircle, faMusic, faChevronDown } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faPlay, faSearch, faTimesCircle, faMusic, faChevronDown)

import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from "./components/pages/Home.vue"
import DetailComponent from "./components/pages/Detail.vue"

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/:id',
        component: DetailComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).use(createPinia()).mount("#app")

