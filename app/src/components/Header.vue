<template>
  <header>
    <a href="/">
      <h1>'6'SNEAKERS</h1>
    </a>
    <router-link :to="`/cart`">
      <button class="cart__icon" >
      <svg
        width="25"
        height="22"
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.833384 0C0.3732 0 0 0.369451 0 0.825046C0 1.28063 0.372991 1.65009 0.833384 1.65009H3.60243C4.98165 5.03194 6.34008 8.41997 7.70824 11.8079L6.44956 14.807C6.34415 15.0572 6.3738 15.3585 6.5259 15.5837C6.6782 15.8089 6.9483 15.951 7.22208 15.9499H21.111C21.5512 15.956 21.9562 15.5609 21.9562 15.1248C21.9562 14.689 21.5512 14.2936 21.111 14.2998H8.47209L9.19247 12.5983L22.5695 11.5414C22.9196 11.5142 23.2366 11.2441 23.316 10.9055L24.9828 3.75555C25.0919 3.27388 24.6654 2.74847 24.1669 2.74999H5.84197L4.93924 0.515623C4.81562 0.213114 4.4963 0 4.16672 0H0.833384ZM6.51047 4.40008H23.1161L21.8228 9.95162L9.15809 10.9485L6.51047 4.40008ZM10.0002 16.5C8.47585 16.5 7.22238 17.741 7.22238 19.25C7.22238 20.7591 8.47585 22 10.0002 22C11.5245 22 12.7779 20.7591 12.7779 19.25C12.7779 17.741 11.5245 16.5 10.0002 16.5ZM18.3335 16.5C16.8092 16.5 15.5557 17.741 15.5557 19.25C15.5557 20.7591 16.8092 22 18.3335 22C19.8578 22 21.1113 20.7591 21.1113 19.25C21.1113 17.741 19.8578 16.5 18.3335 16.5ZM10.0002 18.1501C10.6237 18.1501 11.1112 18.6327 11.1112 19.25C11.1112 19.8673 10.6237 20.3499 10.0002 20.3499C9.37664 20.3499 8.88914 19.8671 8.88914 19.25C8.88914 18.6327 9.37684 18.1501 10.0002 18.1501ZM18.3335 18.1501C18.957 18.1501 19.4445 18.6329 19.4445 19.25C19.4445 19.8673 18.9568 20.3499 18.3335 20.3499C17.71 20.3499 17.2225 19.8673 17.2225 19.25C17.2225 18.6327 17.71 18.1501 18.3335 18.1501Z"
          fill="black"
        />
      </svg>
    </button>
    </router-link>
    
  </header>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  height: 50px;
  width: 100%;
  padding-top: 15px;
  margin-bottom: 20px;
  background: var(--background);
  z-index: 1;
}

a {
  text-decoration: none;
}

h1 {
  font-size: var(--heading-size-mobile);
  text-align: center;
  font-family: var(--heading-font);
}


.cart__icon {
  position: absolute;
  right: 0;
  top: 5;
  margin-right: 10px;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  background: white;
  box-shadow: var(--box-shadow);
}

@media screen and (min-width: 1024px) {
  h1 {
    font-size: var(--heading-size-desktop);
  }
}
</style>