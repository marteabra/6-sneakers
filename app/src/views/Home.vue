<template>
  <Header />
  <main v-if="loading"></main>
  
  <main class="frontpage" v-else>
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
        <router-link :to="{name: 'product', params: {slug: shoe.slug}}">
          <div class="product__image"><img :src="shoe.image" alt=""></div>
          <section class="product__info">
            <span class="product__brand">{{shoe.brandName}}</span>
            <span class="product__model"> {{shoe.model}}</span>
            <div class="product__price">{{shoe.price}},-</div>
          </section>
        </router-link>
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
  width: 40vw;
  margin: 0;
  margin-top: 20px;
  margin: 5;
}
.frontpage {
  margin: 10 10 50 10;
}

.frontpage__buttons {
  display: flex;
  justify-content: center;
  margin: 20 0 20 0;
}

.frontpage__products {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}

.product {
  box-shadow: var(--box-shadow);
  font-family: var(--content-font);
  border-radius: 20px;
  position: relative;
  height: 185px;
  padding: 0;
  text-align: left;
}

.product__image{
  height: 200px;
  width: auto;
}

.product__image img{
  border-radius: 20px 20px 0 0;
  object-fit: contain;
}

.product__info{
  display: grid;
  position:absolute;
  top: 0;
  padding: 80% 10 40 10;
  height: 100%;
  width: 100%;
  color: black;
}

.product__price {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 12 8 0;
}

.product__readmore-desktop {
  
}
.product__readmore-mobile {
  display: none;
  width: 30px;
  position: absolute;
  bottom: -2;
  left: 0;
  font-size: 0.5rem;
}

.product__model {
  font-style: italic;
  font-size: var(--fp-size-model);
}

@media screen and (min-width: 1024px) {
  .frontpage__products {
    grid-template-columns: repeat(3, 1fr);
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

  }





</style>