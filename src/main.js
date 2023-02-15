import { createApp } from 'vue'
import vuetify from '@/vuetify'
import router from '@/router'
import App from '@/App.vue'


createApp(App).use(vuetify).use(router).mount('#app')
