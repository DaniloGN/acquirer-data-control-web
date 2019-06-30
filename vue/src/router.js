import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '',
        name: 'home',
        component: Home,
        children:[
            {
                path:'/',
                name:'dashboard',
                component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
            },
            {
                path:'/arquivos',
                name:'acquirerFiles',
                component: () => import(/* webpackChunkName: "about" */ './views/AcquirerFiles.vue'),
            },
            {
                path: '/adquirentes',
                name: 'acquirer',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/Acquirers.vue')
            },
            {
                path: '/clientes',
                name: 'clients',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/Clients.vue')
            },
            {
                path: '/contratos',
                name: 'contracts',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () => import(/* webpackChunkName: "about" */ './views/Contracts.vue')
            },
        ]
    },
  ]
})
