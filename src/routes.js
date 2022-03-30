import Home from './views/Home.vue';
import Page from './views/Page.vue';
import Cart from './views/Cart.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'page', path: '/page', component: Page },
	{ name: 'cart', path: '/cart', component: Cart }
];
