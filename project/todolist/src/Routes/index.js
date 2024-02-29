import { createRouter, createWebHistory } from 'vue-router'
import main_page from '../components/main_page.vue'
import tasks_page from '../components/tasks_page.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: main_page
        },
        {
            path: '/tasks',
            name: 'tasks',
            component: tasks_page
        }
    ]
})

export default router