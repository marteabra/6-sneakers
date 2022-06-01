<template>
  <Header />
  <main class="cart">
    
    <router-link :to="`/`">
      <button class="back-home" aria-label="Back to home page">
        <svg
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="back-arrow"
        >
          <path
            d="M0.292878 7.29289C-0.0976463 7.68342 -0.0976464 8.31658 0.292878 8.70711L6.65684 15.0711C7.04736 15.4616 7.68053 15.4616 8.07105 15.0711C8.46158 14.6805 8.46158 14.0474 8.07105 13.6569L2.4142 8L8.07105 2.34314C8.46158 1.95262 8.46158 1.31946 8.07105 0.928931C7.68053 0.538407 7.04736 0.538407 6.65684 0.928931L0.292878 7.29289ZM19.0277 7L0.999985 7L0.999985 9L19.0277 9L19.0277 7Z"
            fill="black"
          />
        </svg>
        Home
      </button>
    </router-link>

    <h2>Your shopping cart</h2>
    
    <section>
      <section class="cart-item" v-for="shoe in getCart">
        <div class="cart-item__image">
          <img :src="shoe.image" alt="product image" />
        </div>
        <div class="cart-item__info">
          <div class="cart-item__name">
            <span class="cart-item__brand">{{shoe.brandName}}</span>
            <span class="cart-item__model">{{shoe.model}}</span>
          </div>
          <span class="cart-item__size">STR:{{shoe.size}}</span>
          <span class="cart-item__price">{{shoe.price}},-</span>
        </div>
        <div class="cart-item__remove">
          <button @click="removeItem(index)">X</button>
        </div>
      </section>
    </section>

    <section class="total">
      <div class="total__subtotal">SUBTOTAL:</div>
      <div class="total__price">{{getTotalPrice}} ,-</div>
    </section>
    
  </main>

  <button class="checkout">
    Check out
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="checkout__arrow"
    >
      <path
        d="M18.7349 8.70711C19.1254 8.31658 19.1254 7.68342 18.7349 7.29289L12.3709 0.928932C11.9804 0.538408 11.3472 0.538408 10.9567 0.928932C10.5662 1.31946 10.5662 1.95262 10.9567 2.34315L16.6135 8L10.9567 13.6569C10.5662 14.0474 10.5662 14.6805 10.9567 15.0711C11.3472 15.4616 11.9804 15.4616 12.3709 15.0711L18.7349 8.70711ZM0 9L18.0278 9V7L0 7L0 9Z"
        fill="black"
      />
    </svg>
  </button>
</template>
<script>
import Header from "../components/Header.vue";

export default {

  data() {
    return {
      visible: false
    }
  },

  computed: {
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    },

    getShoe() {
      return this.$store.getters.getShoe;
		},

    getCart() {
      return this.$store.getters.getCart;
    },

    getTotalPrice() {                                  //fetching price from all items in cart, adding them together in computed to make the function run all the time.
			return this.getCart.reduce(function (total, shoe) {
				return total + shoe.price;
			}, 0);
  },
  },

  methods: {
    removeItem(index) {
      this.$store.dispatch('removeItem', index)
    }
  },

  components: {
    Header,
  },
};
</script>
<style scoped>
h2 {
  font-family: var(--pp-price-size);
  color: var(--secondary-color);
}

button {
  margin: 10;
  width: 100px;
  height: 40px;
}

.back-arrow {
  height: 10px;
  margin: 0 10 0 -10;
}

.cart {
  min-height: 75vh;
 
  display: grid;
  margin: auto;

}

.cart-item {
  display: flex;
  justify-content: flex-start;
  position: relative;
  margin: 10;
  height: 20vh;
  border-radius: 20px;
  background: white;
}

.cart-item__image {
  align-self: center;
  margin-left: 5px;
}

.cart-item__image img {
  height: 90%;
  width: auto;
  border-radius: 20px;
}

.cart-item__info {
  position: relative;
  display: grid;
  width: 100%;
  margin: 5px;
  font-size: var(--cp-info-size-mobile);
}

.cart-item__name {
  display: grid;
  height: 50%;
}

.cart-item__model {
  font-style: italic;
}

.cart-item__size {
  align-self: center;
  margin-bottom: 30px;
 
}

.cart-item__price {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: var(--cp-price-size-mobile);
}

.cart-item__remove {
  position: absolute;
  right: 0;
}
.cart-item__remove button {
  height: 30px;
  width: 30px;
  box-shadow: var(--box-shadow);
  background: white;
  margin-top: 0;
  margin: 5px;
}

.total {
  text-align: right;
  float: right;
  margin: 40 20 70 20;
}

.total__subtotal {
  font-family: var(--pp-lead-size);
}

.total__price {
  font-size: 36px;
}

.checkout{
  text-align: center;
  background: white;
  border-radius: 20px 20px 0 0;
  font-size: var(--pp-price-size);
  width: 100%;
  height: 100px;
  margin: 0;
  padding: 20px;
}

.checkout__arrow {
  float: right;
}

</style>