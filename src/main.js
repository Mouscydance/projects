import './assets/main.css'

import { createApp } from 'vue'
import app1 from './app1.vue'
import app2 from './app2.vue'

createApp(app1).mount('#app1')
createApp(app2).mount('#app2')