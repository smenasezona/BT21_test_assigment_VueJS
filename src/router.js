import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Form from './components/Form.vue'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        }
    ]
})
