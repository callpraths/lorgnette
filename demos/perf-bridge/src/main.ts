import * as xPaginate from 'x-paginate'
import { createApp } from 'vue'
import App from './App.vue'
import 'lorgnette-components/define.js'

xPaginate.initialize()

const app = createApp(App)

app.mount('#app')
