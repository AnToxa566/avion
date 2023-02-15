import { createApp } from 'vue'

import vuetify from '@/vuetify'
import router from '@/router'

import App from '@/App.vue'

/* Custom Components */
import CustomButton from '@/components/UI/CustomButton.vue'


createApp(App)

    .component('CustomButton', CustomButton)

    .use(vuetify)
    .use(router)
    
    .mount('#app')
