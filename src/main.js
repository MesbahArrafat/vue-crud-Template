import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'


/*
    bootstrap and JS
*/

import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

/*
    bootstrap and JS
*/

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const app = createApp(App);
app.use(router);
// createApp(App).use(store).use(router).mount('#app')
app.mount('#app');
