import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/home';
import Answer from "../components/answer";
import NotFound from '../components/notFound';

const routes = [
    {
        path: '/',
        name: 'root',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/answer',
        name: 'answer',
        component: Answer
    },
    {
        path: '/not-found',
        name: 'not-found',
        component: NotFound
    },
    {
        path: '/:pathMatch(.*)',
        name: 'error',
        redirect: '/not-found'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router