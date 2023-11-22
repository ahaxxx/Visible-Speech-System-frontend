// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入 router
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(router); // 确保在这里使用 router
app.mount('#app');
