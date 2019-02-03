<template>
  <div class="transparent-bg p-4">
    <div class="container">
      <div class="row justify-content-sm-center">
        <div class="col-sm-3 text-center d-flex align-items-center">
          <img
            v-bind:src="profile"
            class="img-fluid rounded-circle profile"
            alt="Profile picture of Zack Low"
          />
        </div>
        <div class="col-sm-auto d-flex align-items-center">
          <div class="d-block w-100 text-center">
            <h1 class="name">Zack Low</h1>
            <h2 class="title pb-2">Software Engineer</h2>
            <h3 class="location pb-2">New York City</h3>
            <social-links
              class="h1 w-100 list-inline"
              itemClass="list-inline-item mx-3"
            />
          </div>
        </div>
        </div>
      <div class="row mt-4">
        <div class="col-xs-12">
          <p class="h5 p-2">
            Passionate about building scalable modern web applications across the entire stack, with experience front-end engineering in JavaScript, API design and development, Serverless cloud functions, DevOps, data modeling, and database design and development.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavContainer from './NavbarTop.vue';
import SocialLinks from './components/SocialLinks.vue'
import profile from './media/prof.jpeg';

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

.profile {
  box-shadow: 0px 0px 20px rgba(0,0,0,0.5);

}

@include media-breakpoint-down(xs) {
  .profile {
    max-width: 50% !important;
    margin: 0 auto;
  }
}

.title {
  border-bottom: 1px solid $white;
}

.profile {
  max-width: 100%;
}

.transparent-bg {
  color: $white;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.65);
}
</style>
