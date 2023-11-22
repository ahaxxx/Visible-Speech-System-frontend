// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import VideoProcess from '../components/VideoProcess.vue';
import HomePage from '../views/HomePage.vue'; // 假设您有一个主页组件

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/video-process/:filename',
        name: 'VideoProcess',
        component: VideoProcess,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
