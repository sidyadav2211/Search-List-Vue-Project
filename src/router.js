import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
    {
        path: '/about',
        name: 'about',
        component:About,
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router;
