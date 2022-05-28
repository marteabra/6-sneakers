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
      <div class="product" v-for="shoe in result">
        <div class="product__image"><img :src="shoe.image" alt=""></div>
        <section class="product__info">
          <span class="product__brand">{{shoe.brandName}}</span>
          <span class="product__model"> - {{shoe.model}}</span>
          <router-link :to="shoe.slug">
            <button class="product__readmore">
              More
            </button>
        </router-link>
          <div class="product__price">{{shoe.price}},-</div>
        </section>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import sanityMixin from "../mixins/sanityMixin.js";
import query from "../groq/home.groq?raw";

export default {

  mixins: [sanityMixin],

  async created() {
    await this.sanityFetch(query); 
  },

  components: {
    Header,
    Footer
  },

  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME
    };
  },

  async created() {
    await this.sanityFetch(query);
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
  width: 20vw;
  margin: 0;
  margin-top: 20px;
  margin: 0 10 0 10;
}

.frontpage__buttons {
  display: flex;
  justify-content: center;
}

.frontpage__products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 20;
  column-gap: 20px;
  row-gap: 20px;
}

.product {
  display: grid;
  height: 400px; 
  background: white;
  box-shadow: var(--box-shadow);
  border-radius: 20px;
}

.product__image {
  height: 300px;
}

.product__image img{
  border-radius: 20px 20px 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product__info {
  display: grid;
  padding: 0 10 40 20;
  position: relative;
}

.product__price {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 10 10 0;

}
</style>