import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';
// State management
import { createPinia } from 'pinia';
// Fontsawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash, faPen)

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
