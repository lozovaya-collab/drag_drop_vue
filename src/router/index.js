import { createWebHistory, createRouter } from "vue-router";

import AuthPage from '@/pages/AuthPage';
import HomePage from '@/pages/HomePage'

const routes = [{
        path: "/auth",
        name: "Authorization",
        component: AuthPage,

    },
    {
        path: "/",
        name: "ToDo App",
        component: HomePage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;