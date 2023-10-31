//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
//VUE-ROUTER
import router from './router/router';
// PINIA
import { createPinia } from 'pinia';
// AXIOS
import './axios';

import { createApp } from 'vue'
import App from './App.vue'

const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.use(router);