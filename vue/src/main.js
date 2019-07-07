import Vue from 'vue'
import App from './App.vue'
import VueFrappe from 'vue2-frappe';
import Vuetify from 'vuetify'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)
Vue.use(VueFrappe)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
