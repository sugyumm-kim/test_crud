import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import userList from '@/components/userList'
import login from '@/components/login'
import vv from '@/components/vv'

Vue.use(Router)

export const router = new Router({
 mode: 'history',
 routes: [
    {
        path: '/',
        name: 'login',
        component: login
    },
    {
        path: '/SignUp',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/userList',
        name: 'userList',
        component: userList
    },
    {
        path: '/vv',
        name: 'vv',
        component: vv
    },
    // {
    //     path: '/',
    //     name: 'Vue',
    //     component: Vue
    // },
 ]
});

export default router;