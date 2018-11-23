// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入jQuery
import $ from 'jquery'
// 引入bootstrap
import './assets/css/bootstrap.min.css'
import './assets/js/bootstrap.min'
// 引入配置文件
import Config from './config/config.js'
// 引入axios
import axios from 'axios'
axios.defaults.baseURL = Config.BASE_API;
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
