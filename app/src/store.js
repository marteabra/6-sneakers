import sanityMixin from '../src/mixins/sanityMixin';

export default {

	mixins: [sanityMixin],
	async created() {
		await this.sanityFetch(query)
	},

	state() {
		return {
			cart: [],
			shoe: []
		};
	},

	methods: {
		getShoe() {
			this.shoe += this.content
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
			console.log(this.state.cart)
		},

		remove(state) {
			state.cart = []
		}
	},

	actions: {
		updateProducts({ commit }, result) {
			commit('addToCart', result)
		},

		removeProduct({ commit }, result) {
			commit('remove', result)
		}
	}
};
