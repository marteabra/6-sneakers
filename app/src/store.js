import sanityMixin from '../src/mixins/sanityMixin';

export default {

	mixins: [sanityMixin],

	async created() {
		await this.sanityFetch(query)
	},

	state() {
		return {
			cart: [],
			shoe: [],
			size: [],
			total: 0,
		};
	},

	methods: {
		getTotalPrice() {
			return this.cart.reduce(function (total, shoe) {
				return total + shoe.price;
			}, 0)
		}
	},

	getters: {
		getShoe(state) {
			return state.shoe;
		},

		getCart(state) {
			return state.cart;
		}
	},

	mutations: {
		addToCart(state, shoe) {
			state.cart.push(shoe);
		},

		removeItem(state, index) {
			state.cart.splice(index, 1);
		},

		// select size, needs to be fixed!
		selectSize(state, size) {
			state.size.push(size);
		},
		updateSize(state, { index, value }) {
			state.size[index] = value;
		}
	},

	actions: {
		updateProducts({ commit }, result) {
			commit('addToCart', result)
		},

		removeItem({ commit }, index) {
			commit('removeItem', index)
		}
	},
}
