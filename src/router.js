import { createRouter, createWebHistory } from "vue-router";
import Portfolio from './pages/Portfolio.vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/about-us',
            name: 'about',
            component: About,
        },
    ],
})

export {router}