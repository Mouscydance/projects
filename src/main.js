import './assets/main.css'

import { createApp } from 'vue'
import app1 from './app1.vue'
import app2 from './app2.vue'
import app3 from './app3.vue'
import app4 from './app4.vue'

createApp(app1).mount('#app1')
createApp(app2).mount('#app2')
createApp(app3).mount('#app3')
createApp(app4).mount('#app4')