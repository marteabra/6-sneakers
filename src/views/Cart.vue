<template>
  <Header />
  <section class="cart">
    <h2>Your shopping cart</h2>

    <section class="cart-item">
      <div class="cart-item__image">
        <img src="/" alt="" />
      </div>
      <div class="cart-item__info">
        <div>Brand</div>
        <div>Model</div>
        <div>Size</div>
        <div>Price</div>
      </div>
      <div class="cart-item__remove">
        <button>X</button>
      </div>
    </section>

    <section class="cart-item">
      <div class="cart-item__image">
        <img src="/" alt="" />
      </div>
      <div class="cart-item__info">
        <div>Brand</div>
        <div>Model</div>
        <div>Size</div>
        <div>Price</div>
      </div>
      <div class="cart-item__remove">
        <button>X</button>
      </div>
    </section>

    <section class="total">
      <div class="total__subtotal">SUBTOTAL:</div>
      <div class="total__price">Total Price</div>
    </section>
  </section>

  <section class="checkout">
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
  </section>
</template>
<script>
import Header from "../components/Header.vue";

export default {
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

.cart {
  min-height: 75vh;
  display: inline-block;
  margin: 10;
}

.cart-item {
  display: flex;
  justify-content: flex-start;
  background: white;
  height: 15vh;
  width: 95vw;
  border-radius: 20px;
  margin-top: 20;
}

.cart-item__image {
  height: 100px;
  width: 150px;
  background: grey;
  border-radius: 20px;
  margin: 10px;
}

.cart-item__info {
  margin: 10px;
}

.cart-item__remove {
  position: absolute;
  right: 0;
  margin: 10 20 0 0;
}
.cart-item__remove button {
  height: 40px;
  width: 40px;
  box-shadow: var(--box-shadow);
  background: white;
}

.total {
  display: grid;
  float: right;
  margin: 30 10 10 10;
}

.total__subtotal {
  font-family: var(--pp-lead-size);
}

.total__price {
  font-size: 36px;
}

.checkout {
  background: white;
  height: 120px;
  text-align: center;
  padding: 40px;
  font-size: var(--pp-price-size);
}

.checkout__arrow {
  float: right;
}
</style>