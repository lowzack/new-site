<template>
  <div class="transparent-bg p-2">
    <div>
      <h1 class="name">Zack Low</h1>
      <h2 class="title">Software Engineer</h2>
      <h4>Passionate about building modern scalable web applications across the entire stack, with experience front-end engineering in JavaScript, API design and development, Database design and development, data modelling and DevOps.</h4>
      <social-links class="social-icons inline"></social-links>
    </div>
  </div>
</template>

<script>
import NavContainer from './NavbarTop.vue';
import SocialLinks from './components/SocialLinks.vue'

export default {
  components: {
    navContainer: NavContainer,
    socialLinks: SocialLinks
  }
}
</script>

<style lang="scss" scoped>
@import './scss/main.scss';

.social-icons {
  font-size: 3em;
  text-align: center;
  padding-top: 2em;
}

.transparent-bg {
  color: $white;
  margin: 0 auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
