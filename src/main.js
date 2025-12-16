
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from '@/components/router/router.js'

const app = createApp(App);
app.use(Router);
app.mount('#app');
