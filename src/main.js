// main.js
import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Form from './components/Form.vue'
import './assets/main.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/form', component: Form}
    ]
})

createApp(App).use(router).mount('#app')
