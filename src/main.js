import { createApp } from 'vue'

import App from './App.vue'
import router from './router/router'
import store from './vuex/store'
// import './assets/styles/styles.scss'

const app = createApp(App)



app.use(router).use(store).mount('#app')