// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 饿了么
import ElementUI from 'element-ui'
import '../static/css/index.css'
Vue.use(ElementUI)

//VueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//vue-event-calendar
import '../static/css/vueEventCalendar.css'
import vueEventCalendar from 'vue-event-calendar'
Vue.use(vueEventCalendar, {locale: 'en', color:  '#4fc08d'})

// vue-cookie
var VueCookie = require('vue-cookie');
Vue.use(VueCookie);

// axios
import axios from 'axios'
Vue.prototype.$ajax = axios;

// font-awesome 图标样式
import 'font-awesome/css/font-awesome.min.css'

//vue-clipboard 复制剪切板
import vueClipboard from 'vue-clipboard2'
Vue.use(vueClipboard);

import routes from './routes'
import App from './App'
Vue.config.productionTip = false

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})
