import { createApp } from 'vue'
import App from './App.vue'
// import '@fontawesome/fontawesome-free/css/all.css';
import router from './router'

const app = createApp(App)

// createApp(App).mount('#app')
app.use(router);
app.mount('#app');