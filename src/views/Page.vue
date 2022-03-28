<template>
  <Header />
  <main>
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
    <section class="product">
      <div class="product__image"></div>
      <section class="product__size">
        <button>38</button>
        <button>39</button>
        <button>40</button>
      </section>
      <div class="product__info">
        <section class="product__info--name">
          <div class="product__info--brand">Brand</div>
          <div class="product__info--model">Model</div>
        </section>
        <section class="product__info--price">
          <div>Price</div>
        </section>
      </div>
      <section class="product__info--lead">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consequat placerat elit porta. Justo, amet dictum sit ipsum, amet
          lacus. Augue suspendisse at scelerisque sed lacus scelerisque tortor.
          Viverra consectetur tellus sit donec dignissim maecenas diam nibh.
          Fusce hendrerit elit semper enim, sed. Fames tincidunt elit, in tortor
          integer porta purus sit.
        </div>
      </section>
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

  setup() {},
};
</script>
<style scoped>
button {
  margin: 20 0 20 0;
  width: 100px;
  height: 40px;
}

.back-arrow {
  height: 10px;
  margin: 0 10 0 -10;
}

.product__size {
  display: flex;
  justify-content: space-evenly;
}

.product__size button {
  border-radius: 100%;
  height: 40px;
  width: 40px;
}

.product__image {
  height: 40vh;
  width: 88vw;
  background: grey;
  margin: auto;
  border-radius: 20px;
}

.product__info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.product__info--brand {
  font-family: var(--content-font);
  font-size: var(--pp-brand-size);
  font-weight: 700;
}

.product__info--model {
  font-size: var(--pp-model-size);
  font-weight: 200;
}

.product__info--price {
  font-family: var(--pp-price-font);
  font-size: var(--pp-price-size);
}
</style>
