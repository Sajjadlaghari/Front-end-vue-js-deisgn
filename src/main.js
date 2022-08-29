import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './routes'
import VueAxios from 'vue-axios'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'


const app = createApp(App)
app.use(router)
app.use(VueTelInput);
app.use(VueAxios,axios)
app.mount('#app')
