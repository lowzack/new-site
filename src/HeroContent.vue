<template>
  <div class="transparent-bg p-4">
    <div class="container">
      <div class="row">
        <div class="order-2 order-lg-1 col-sm-5 col-lg-3 pt-4 pt-sm-0 pr-lg-5 d-flex align-items-center">
          <img
            v-bind:src="profile"
            class="img-fluid profile border-chip"
            alt="Profile picture of Zack Low"
          />
        </div>
        <div class="order-1 order-lg-2 col-sm-7 col-lg-9 d-flex align-items-center">
          <div class="w-100">
            <div class="d-block d-lg-inline-flex align-items-end">
              <h1 class="pr-4">Zack Low</h1>
              <h2>Software Engineer</h2>
            </div>
            <h3 class="location pb-2">New York City</h3>
            <social-links
              class="h1 w-100 list-inline social-links"
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

.title {
  border-bottom: 1px solid $white;
}

.profile {
  max-width: 50% !important;
  margin: 0 auto;
  
  @include media-breakpoint-up(sm) {
    min-width: 75%;
  }

  @include media-breakpoint-up(lg) {
    min-width: 100%;
  }
}

.social-links {
  :first-child {
    margin-left: 0 !important;
  }
}

.transparent-bg {
  color: $white;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.65);
}
</style>
