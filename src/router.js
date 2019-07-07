import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/enviar',
          name: 'sendFile',
          component: () => import(/* webpackChunkName: "about" */ './views/FilesSend.vue'),

      },
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

                  component: () => import(/* webpackChunkName: "about" */ './views/Acquirers.vue')
              },
              {
                  path: '/clientes',
                  name: 'clients',
                  component: () => import(/* webpackChunkName: "about" */ './views/Clients.vue')
              },
              {
                  path: '/contratos',
                  name: 'contracts',
                  component: () => import(/* webpackChunkName: "about" */ './views/Contracts.vue')
              },
          ]
      },
  ]
})
