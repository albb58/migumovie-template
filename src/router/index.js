import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)


// 定义路由组件
import AppHome from '@views/Home/AppHome'
import AppTicket from '@views/Ticket/AppTicket'
import AppFind from '@views/Find/AppFind'
import AppMine from '@views/Mine/AppMine'
import AppNotFount from '@views/not-fount/NotFount'


// 路由表
const routes = [
    {
        path: '/', //当path为/时，重定向到路由名字为home的页面
        redirect: { //重定向
            name: 'home'
        }
    },
    {
        path: '/home', //当path为/home时渲染AppHome组件
        name: 'home', //路由名称
        component: AppHome //组件名称
    },
    {
        path: '/ticket',
        name: 'ticket',
        component: AppTicket
    },
    {
        path: '/find',
        name: 'find',
        component: AppFind
    },
    {
        path: '/mine',
        name: 'mine',
        component: AppMine
    },
    {
        path: '/not-fount',
        name: 'not-fount',
        component: AppNotFount
    },
    {
        path: '**', //当用户输入的地址不是上面的地址内容的话，重定向到404页面
        redirect: {
            name: 'not-fount'
        }
    }
]

// 路由工具
const router = new VueRouter({
    mode: 'history',
    routes,
  })


export default router