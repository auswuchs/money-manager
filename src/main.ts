import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'materialize-css/dist/js/materialize.min.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
