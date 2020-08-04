<template>
  <div id="app">
    <psection class="background-cover py-2" :image="image">
      <hero-content></hero-content>
    </psection>
    <psection class="bg-white shadow-inverted">
      <transition-slide-right>
        <div class="p-4">
            <h2 class="h1 mt-1 border-bottom border-warning">Current Employment</h2>
          <div class="row justify-content-sm-center p-4">
            <div class="col-md-4 order-md-2 text-center d-flex align-items-center">
              <img
                class="img-fluid mx-auto mb-3 mb-md-0"
                :alt="employmentData.currentEmployment.logo"
                :src="employmentData.currentEmployment.logo"
              />
            </div>
            <div class="col-md-8 order-md-1 d-flex align-items-center">
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
          </div>
        </div>
      </transition-slide-right>
    </psection>
    <psection class="bg-light shadow">
      <transition-slide-right>
        <div class="p-4">
          <h2 class="h1 border-bottom border-warning mt-1">Previous Employment</h2>
          <div class="row d-flex align-items-stretch pt-4">
            <div class="col-sm-12 col-md-4 d-flex align-items-stretch mb-3 mb-md-0" v-for="employer in employmentData.previousEmployment">
              <card
                class="w-100 border-chip"
                :title="employer.company"
                :subtitle="employer.title"
                :image="employer.logo"
                :imageAlt="employer.logoAlt"
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
import Card from './components/Card.vue';
import Navbar from './components/Navbar.vue';
import Section from './components/Section.vue';
import HeroContent from './HeroContent.vue';
import NavbarTop from './NavbarTop.vue';
import SocialLinks from './components/SocialLinks.vue';
import EmploymentDetail from './components/EmploymentDetail.vue';
import TransitionSlideRight from './components/TransitionSlideRight.vue'
import EducationContent from './EducationContent.vue';
import backgroundImage from './media/20190930_095016.jpg';
import favicon from './media/favicon.ico';
import employmentData from './data';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      image: backgroundImage,
      employmentData
    }
  },
  head: {
    meta: [
      {
        name: 'description',
        content: 'Personal website for Zack Low, a Software Engineer based in New York City.'
      }
    ],
    link: [
      { rel: 'icon', href: favicon, sizes: '16x16', type: 'image/png' },
    ]
  },
  components: {
    card: Card,
    navContainer: NavbarTop,
    psection: Section,
    heroContent: HeroContent,
    employmentDetail: EmploymentDetail,
    education: EducationContent,
    socialLinks: SocialLinks,
    transitionSlideRight: TransitionSlideRight
  },
  mounted() {
    this.$ga.page('/');
    this.$ga.event({
      eventCategory: 'page',
      eventAction: 'load',
      eventLabel: 'homepage',
      eventValue: document.referrer || 'Direct'
    });
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
