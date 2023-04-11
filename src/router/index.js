import { createWebHistory, createRouter } from "vue-router";

import { apiService } from "../shared/api/swagger/swagger";

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

// проверка авторизации
router.beforeEach(async(to, from, next) => {

    try {
        await apiService.me.Me()
        next()

    } catch (err) {
        console.log(err)
        if (to.name !== "Authorization") router.push('/auth')
    }



})


export default router;