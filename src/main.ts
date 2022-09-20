import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from "aos";
import "aos/dist/aos.css";
import {pinia} from './store'
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

pinia.use(piniaPluginPersistedstate);

AOS.init();

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
