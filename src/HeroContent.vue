<template>
  <div class="container">
    <div>
      <h1 class="name">Zack Low</h1>
      <nav-container></nav-container>
      <h2 class="title">Software Engineer</h2>
      <h3>Passionate about building modern scalable web applications across the entire stack, with experience front-end engineering in JavaScript, API design and development, Database design and development, data modelling and DevOps.</h3>
      <social-links class="social-icons inline"></social-links>
    </div>
  </div>
</template>

<script>
import NavContainer from './NavbarTop.vue';
import SocialLinks from './SocialLinks.vue'

export default {
  components: {
    navContainer: NavContainer,
    socialLinks: SocialLinks
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/colors.scss";
@import "./scss/mixins.scss";
@import "./scss/resets.scss";

.social-icons {
  font-size: 3em;
  text-align: center;
  padding-top: 2em;
}

.container {
  color: $white;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:1em;
  background-color: rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 5em;
  text-shadow: 0px 0px 5em #000;
}
h2 {
  font-size: 3.5em;
  text-shadow: 0px 0px 5em #000;
}
h3 {
  padding-top: .5em;
  text-shadow: 0px 0px 5em #000;
}
</style>
