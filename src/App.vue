<template>
  <div id="app">
    <psection class="background-cover py-2" :image="image">
      <hero-content></hero-content>
    </psection>
    <psection class="bg-white shadow-inverted">
      <transition-slide-right>
        <div class="p-4">
            <h1 class="mt-1 border-bottom border-primary">Current Employment</h1>
          <div class="row justify-content-sm-center p-4">
            <div class="col-sm-9 d-flex align-items-center">
              <div class="d-block w-100r">
                <employment-detail
                  :company="employmentData.currentEmployment.company"
                  :title="employmentData.currentEmployment.title"
                  :dates="employmentData.currentEmployment.dates"
                  :description="employmentData.currentEmployment.overview"
                  :highlights="employmentData.currentEmployment.highlights"
                />
              </div>
            </div>
            <div class="col-sm-3 text-center d-flex align-items-center">
              <img class="img-fluid mx-auto" :src="employmentData.currentEmployment.logo"/>
            </div>
          </div>
        </div>
      </transition-slide-right>
    </psection>
    <psection class="bg-light shadow">
      <transition-slide-right>
        <div class="p-4">
          <h1 class="border-bottom border-primary mt-1">Previous Employment</h1>
          <div class="row d-flex align-items-stretch pt-4">
            <div class="col-sm-12 col-md-4 d-flex align-items-stretch mb-3 mb-md-0" v-for="employer in employmentData.previousEmployment">
              <card
                class="w-100"
                :title="employer.company"
                :subtitle="employer.title"
                :image="employer.logo"
                :heading="employer.dates"
                >
                <a :href="employer.website" target="_blank">Website</a>
              </card>
            </div>
          </div>
        </div>
    </transition-slide-right>
    </psection>
    <psection class="bg-light shadow-inverted">
      <education></education>
    </psection>
  </div>
</template>

<script>
import VueHelmet from 'vue-helmet';
import Card from './components/Card.vue';
import Navbar from './components/Navbar.vue';
import Section from './components/Section.vue';
import HeroContent from './HeroContent.vue';
import NavbarTop from './NavbarTop.vue';
import SocialLinks from './components/SocialLinks.vue';
import EmploymentDetail from './components/EmploymentDetail.vue';
import TransitionSlideRight from './components/TransitionSlideRight.vue'
import EducationContent from './EducationContent.vue';
import backgroundImage from './media/banner-new.jpg';
import employmentData from './data';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      image: backgroundImage,
      employmentData,
      title: 'POOP'
    }
  },
  components: {
    card: Card,
    navContainer: NavbarTop,
    psection: Section,
    heroContent: HeroContent,
    employmentDetail: EmploymentDetail,
    education: EducationContent,
    socialLinks: SocialLinks,
    transitionSlideRight: TransitionSlideRight,
    helmet: VueHelmet
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/mixins.scss";

.shadow {
  @include box-shadow(0, 0, 20px, #DDD, false);
}
.shadow-inverted {
  @include box-shadow(0px, 10px, 20px, #DDD, true);
}
</style>
