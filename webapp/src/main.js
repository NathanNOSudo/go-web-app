// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
// filepath: /Users/skankhunt/portfolio-pojects/project-1/webapp/src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');