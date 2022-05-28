import Home from './views/Home.vue';
import Product from './views/Product.vue';
import Cart from './views/Cart.vue';

export default [
	{ name: 'home', path: '/', component: Home },
	{ name: 'product', path: '/:slug', component: Product },
	{ name: 'cart', path: '/cart', component: Cart }
];
