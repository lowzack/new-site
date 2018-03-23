<template>
  <div class="transparent-bg p-4">
    <div class="container">
      <div class="row">
        <div class="col-sm-3 text-center">
          <img v-bind:src="profile" class="profile img-fluid rounded-circle"></img>
        </div>
        <div class="col-sm-9 d-flex align-items-center">
          <div class="d-block w-100">
            <h1 class="name">Zack Low</h1>
            <h2 class="title">Software Engineer</h2>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-xs-12">
          <p class="h4 p-2">Passionate about building modern scalable web applications across the entire stack, with experience front-end engineering in JavaScript, API design and development, Database design and development, data modelling and DevOps.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 text-center">
          <social-links class="social-icons w-100"></social-links>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavContainer from './NavbarTop.vue';
import SocialLinks from './components/SocialLinks.vue'
import profile from './media/prof.jpg';

export default {
  components: {
    navContainer: NavContainer,
    socialLinks: SocialLinks
  },
  data() {
    return {
      profile
    }
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
  background-color: rgba(0, 0, 0, 0.65);
}
</style>
