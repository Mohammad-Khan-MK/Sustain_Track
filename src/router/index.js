import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Account from '../views/Account.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/account', name: 'Account', component: Account }, // Ensure this route is correct
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
