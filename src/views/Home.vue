<template>
  <Header />
  <main class="frontpage">
    <section class="frontpage__buttons">
      <button class="sort-button">
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="0.5" x2="10" y2="0.5" stroke="black" />
          <line x1="2" y1="3.5" x2="10" y2="3.5" stroke="black" />
          <line x1="4" y1="6.5" x2="10" y2="6.5" stroke="black" />
        </svg>
        Sort
      </button>
      <button class="filter-button">
        Filter
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line y1="1.5" x2="10" y2="1.5" stroke="black" />
          <line y1="5.5" x2="10" y2="5.5" stroke="black" />
          <circle cx="2.5" cy="1.5" r="1.5" fill="black" />
          <circle cx="7.5" cy="5.5" r="1.5" fill="black" />
        </svg>
      </button>
    </section>
    <section class="frontpage__products">
      <div class="product">
        <div class="product__image">Image container</div>
        <div class="product__brand">Brand</div>
        <div class="product__product">Product Name</div>
        <div class="product__price">Price</div>
      </div>
      <div class="product">
        <div class="product__image">Image container</div>
        <div class="product__brand">Brand</div>
        <div class="product__product">Product Name</div>
        <div class="product__price">Price</div>
      </div>
      <div class="product">
        <div class="product__image">Image container</div>
        <div class="product__brand">Brand</div>
        <div class="product__product">Product Name</div>
        <div class="product__price">Price</div>
      </div>
      <div class="product">
        <div class="product__image">Image container</div>
        <div class="product__brand">Brand</div>
        <div class="product__product">Product Name</div>
        <div class="product__price">Price</div>
      </div>
      <div class="product">
        <div class="product__image">Image container</div>
        <div class="product__brand">Brand</div>
        <div class="product__product">Product Name</div>
        <div class="product__price">Price</div>
      </div>
      <div class="product">
        <div class="product__image">Image container</div>
        <div class="product__brand">Brand</div>
        <div class="product__product">Product Name</div>
        <div class="product__price">Price</div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },

  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME,
    };
  },
};
</script>

<style scoped>
h1 {
  font: var(--font-family);
  color: var(--secondary-color);
}

button {
  background: white;
  padding: 10px;
  width: 40vw;
  margin: 0;
}

.frontpage__buttons {
  display: flex;
  justify-content: space-evenly;
}

.frontpage {
  margin: 25px;
  display: grid;
  justify-content: center;
}

.product__image {
  height: 65%;
  background: grey;
  border-radius: 20px 20px 0 0;
  text-align: center;
}

.frontpage__products {
  width: 100%;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
}

.product {
  height: 25vh;
  width: 40vw;
  background: white;
  box-shadow: var(--box-shadow);
  border-radius: 20px;
}
</style>