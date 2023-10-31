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
<<<<<<< HEAD
app.use(router);

app.mount("#app");
=======
app.use(router);
>>>>>>> bfa41a9064ae5804644e2efeb769de501fc122f3
