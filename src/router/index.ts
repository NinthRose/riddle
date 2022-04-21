import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/home'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/:pathMatch(.*)',
        name: 'error',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router