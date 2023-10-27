//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//VUE-ROUTER
import router from './router/router';

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).use(router).mount('#app')
