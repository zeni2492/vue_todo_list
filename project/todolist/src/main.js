import { createApp } from 'vue'
import App from './App.vue'
import router  from './Routes/index.js'
import './global-styles.css'
import store from './store'

const apps = createApp(App).use(store)
apps.use(router).mount('#app')