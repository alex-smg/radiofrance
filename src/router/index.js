import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login.vue'
import Signup from '../views/Signup.vue'
import HomeStatus from '../views/HomeStatus.vue';
import Profil from '../views/Profil.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    },
    {
        path: '/homeStatus',
        name: 'homeStatus',
        component: HomeStatus
    },
    {
        path: '/profil',
        name: 'profil',
        component: Profil
    },
    /*{ path: "*", component: PageNotFound }*/
];

const router = new VueRouter({
    mode: 'history',
    routes
});

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index];
    if (!subsequentMiddleware) return context.next;
    return (...parameters) => {
        context.next(...parameters);
        const nextMiddleware = nextFactory(context, middleware, index + 1);
        subsequentMiddleware({ ...context, next: nextMiddleware });
    };
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware) ? to.meta.middleware : [to.meta.middleware];
        const context = {
            from,
            next,
            router,
            to,
        };
        const nextMiddleware = nextFactory(context, middleware, 1);
        return middleware[0]({ ...context, next: nextMiddleware });
    }
    return next();
});

export default router

