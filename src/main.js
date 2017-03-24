// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import store from './store'
import './assets/css/common'
import './libs/rem'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
    router,
    store
}).$mount('#app')
