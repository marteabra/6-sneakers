<template>
  <div class="footer">
    <section class="footer__info">
      <div class="copyright">6sneakers©</div>
      <div>help@6sneakers.com</div>
      <div>+47 987 65 432</div>
    </section>
    <section class="footer__socials">
      <div>
        <img
          src="public/images/facebook-2.png"
          alt="logo-facebook"
          class="facebook"
        />
      </div>
      <div>
        <img
          src="public/images/instagram-3.png"
          alt="logo-instagram"
          class="instagram"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100vw;
  padding: 25px;
  border-radius: 20px 20px 0 0;
  background: white;
}

.copyright {
  margin-bottom: 10px;
}

.footer__socials {
  display: flex;
}

.footer__socials img {
  height: 30px;
  width: 30px;
  margin: 5px;
}
</style>>
