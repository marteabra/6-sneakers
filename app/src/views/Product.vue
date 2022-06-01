<template>
  <Header />
  <main v-if="loading">
  loading
  </main>
  <main v-else class="product-page">
    <router-link :to="`/`">
      <button class="go-back" aria-label="Go back">
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
      Back
      </button>
    </router-link>
    <main class="product">
      <section class="product__container">
        <div class="product__image">
          <img :src="result.image" alt="image of shoe">
        </div>

        <section class="product__container-desktop">
          <select class="product__size-mobile">
              <option value="select size" disabled>Chose your size</option>
              <option v-for="size in result.size">{{size}}</option>
            </select>
          <div class="product__info">
            <section class="product__info-name">
              <div class="product__info-brand">{{result.brandName}}</div>
              <div class="product__info-model">{{result.model}}</div>
            </section>
            <section class="product__info-price">
              <div>{{result.price}},-</div>
            </section>
            <select class="product__size-desktop" >       <!--add v-model="selectedShoe.size" if using select size function. Attempt on select shoe size, didn´t have time to figure it out by due date  -->
              <option value="select size" disabled>Chose your size</option>
              <option v-for="size in result.size">{{size}}</option>
            </select>
          </div>
          <section class="add-cart__desktop">
            <button @click="addToCart(result)">+ Add to cart</button>
          </section>
        </section>
      </section>
    
      <section class="product__lead">
        <div>
          {{result.shoeInfo}}
        </div>
      </section>
    </main>

    <section class="add-cart__mobile">
          <button class="add-cart__mobile-button" @click="addToCart(result)">
            <svg
              width="25"
              height="22"
              viewBox="0 0 25 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833384 0C0.3732 0 0 0.369451 0 0.825046C0 1.28063 0.372991 1.65009 0.833384 1.65009H3.60243C4.98165 5.03194 6.34008 8.41997 7.70824 11.8079L6.44956 14.807C6.34415 15.0572 6.3738 15.3585 6.5259 15.5837C6.6782 15.8089 6.9483 15.951 7.22208 15.9499H21.111C21.5512 15.956 21.9562 15.5609 21.9562 15.1248C21.9562 14.689 21.5512 14.2936 21.111 14.2998H8.47209L9.19247 12.5983L22.5695 11.5414C22.9196 11.5142 23.2366 11.2441 23.316 10.9055L24.9828 3.75555C25.0919 3.27388 24.6654 2.74847 24.1669 2.74999H5.84197L4.93924 0.515623C4.81562 0.213114 4.4963 0 4.16672 0H0.833384ZM6.51047 4.40008H23.1161L21.8228 9.95162L9.15809 10.9485L6.51047 4.40008ZM10.0002 16.5C8.47585 16.5 7.22238 17.741 7.22238 19.25C7.22238 20.7591 8.47585 22 10.0002 22C11.5245 22 12.7779 20.7591 12.7779 19.25C12.7779 17.741 11.5245 16.5 10.0002 16.5ZM18.3335 16.5C16.8092 16.5 15.5557 17.741 15.5557 19.25C15.5557 20.7591 16.8092 22 18.3335 22C19.8578 22 21.1113 20.7591 21.1113 19.25C21.1113 17.741 19.8578 16.5 18.3335 16.5ZM10.0002 18.1501C10.6237 18.1501 11.1112 18.6327 11.1112 19.25C11.1112 19.8673 10.6237 20.3499 10.0002 20.3499C9.37664 20.3499 8.88914 19.8671 8.88914 19.25C8.88914 18.6327 9.37684 18.1501 10.0002 18.1501ZM18.3335 18.1501C18.957 18.1501 19.4445 18.6329 19.4445 19.25C19.4445 19.8673 18.9568 20.3499 18.3335 20.3499C17.71 20.3499 17.2225 19.8673 17.2225 19.25C17.2225 18.6327 17.71 18.1501 18.3335 18.1501Z"
                fill="white"
              />
            </svg>
          </button>
          <div class="add-cart__mobile-text">+ ADD TO CART</div>
        </section>
  </main>
  <footer>
    <Footer />
  </footer>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import sanityMixin from "../mixins/sanityMixin";
import query from "../groq/productPage.groq?raw";

export default {

  mixins: [sanityMixin],    //  getting sanity mixin to fetch query and params through methods

  async created() {
    await this.sanityFetch(query, params);
  },

  computed: {
    products() {
      return this.$store.getters.getproduct;
    }
  },

  methods: {
    addToCart(products) {
      this.$store.dispatch("updateProducts", products)    //  updating cart when clicking button to add product in cart
    }
  },

  data() {
    return{
      appName: import.meta.env.VITE_APP_NAME,
      /* selectedShoe: {                           //Attempt on fetching selected size. Will continue to try to make this work.
        brandName: this.products.brandName,
        model: this.products.model,
        price: this.products.price,
        size: this.products.size[0]
      } */
    };
  },

  components: {
    Header,
    Footer
  },

  async created() {
    const params = {
      slug: this.$route.params.slug  
    }
    await this.sanityFetch(query, params);
  }

};
</script>
<style scoped>
a{
  text-decoration: none;
  color: black;
}

button {
  margin: 20 0 20 0;
  width: 100px;
  height: 40px;
}
.product-page {
  padding-bottom: 100px;
  margin: 10;
}

.back-arrow {
  height: 10px;
  margin: 0 10 0 -10;
}

.product {
  width: 100%;
  margin: 0 auto;
}

.product__image {
  width: 100%;
}

.product__image img{
  width: 100%;
  border-radius: 20px;
  box-shadow: var(--box-shadow);
}

.product__size-mobile{
  display: flex;
  justify-content: center;
  border: none;
  width: 40%;
  height: 20%;
  margin: 20 0 20 10;
  font-family: var(--pp-price-font);
  font-size: 1rem;
  user-select: none;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
}

.product__size-mobile select {
  display: none;
}

.product__size-mobile button {
  border-radius: 100%;
  height: 40px;
  width: 40px;
  margin: 10px;
}

.product__size-desktop{
  display: none;
}

.product__container {
  display: grid;
}

.add-cart__desktop{
  display: none;
}
.add-cart__mobile {
  position: absolute;
  background: white;
  width: 100vw;
  left: 0;
  align-items: center;
}

.add-cart__mobile-button {
  background: var(--secondary-color);
  border-radius: 100%;
  height: 80px;
  width: 80px;
  display: block;
  margin: auto;
  margin-top: -40px;
}

.product__info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 30 0 20 0;
  padding: 10px;
}

.product__info-brand {
  font-family: var(--content-font);
  font-size: var(--pp-brand-size-mobile);
  font-weight: 700;
}

.product__info-model {
  font-size: var(--pp-model-size-mobile);
  font-weight: 200;
}

.product__info-price {
  font-family: var(--pp-price-font);
  font-size: var(--pp-price-size-mobile);
}

.product__lead {
  width: 100%;
  text-align: justify;
  margin-bottom: 60px;
  padding: 10px;
}

.add-cart__mobile-text {
  text-align: center;
  margin: 20px;
} 

footer {
  display: none;
}

/* Small desktop */
@media screen and (min-width: 1024px){

  .product-page {
    max-width: 1000px;
    margin: 0 auto;
  }
  .add-cart__mobile{
    display: none;
  }

  .product__container{
    display: flex;
    width: 100%;
  }

  .product__container-desktop {
    width: 50%;
  }

  .product__image{
    width: 50%;
    height: 100%;
    margin-right: 50px;
  } 

  .product__info {
    display: grid;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .product__info-price {
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .product__size-mobile{
    display: none;
  }

  .product__size-desktop{
    display: block;
    margin-top: 0px;
    margin-left: -10;
  }

  .product__size-desktop button {
    border-radius: 100%;
    height: 40px;
    width: 40px;
    margin: 10px;
  }

   .add-cart__desktop{
    display: block;
    position: absolute;
  }

  .add-cart__desktop button {
    background: var(--secondary-color);
    color: white;
    border-radius: 20px;
    height: 40px;
    width: 40vw;
    margin-left: -8px;
  }

  .product__lead {
    white-space: pre-wrap;
    width: 40ch;
    margin-top: 40px;
    font-size: var(--pp-lead-size-desktop);
  }

  footer {
    display: block;
  }

}

/* Large desktop */
@media screen and (min-width: 1300px) {
  .product-page {
    max-width: 1100px;
    margin: 0 auto;
  }

  .product__info-brand{
    font-size: var(--pp-brand-size-desktop);
  }

  .product__info-model {
    font-size: var(--pp-model-size-desktop);
  }

  .product__info-price {
    font-size: var(--pp-price-size-desktop);
  }

  .product__lead {
    width: 48ch;
  }

  .add-cart__desktop {
    position: relative;
    margin-top: 75px;
    bottom: 0;
  }

  .add-cart__desktop {
    margin-top: 94px;
  }

  .add-cart__desktop button {
    height: 50px;
    width: 100%;
    margin: 0;
  }
  
}

/* 4K screens */
@media screen and (min-width: 2000px) {
  .product-page {
    max-width: 1400px;
    margin: 0 auto;
  }

  .add-cart__desktop {
    height: 100px;
    width: 70%;
  }

  .add-cart__desktop button {
    width: 100%;
  }
}
</style>
