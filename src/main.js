import {createApp} from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import globalData from './globaldata'

const eventBus = mitt()
const app = createApp(App)

app.provide("globalData", globalData)

app.config.globalProperties.eventBus = eventBus

app.mount('#app')
