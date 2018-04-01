<template>
  <div id="app">
    <psection class="background-cover py-2" :image="image">
      <hero-content></hero-content>
    </psection>
    <psection class="bg-light shadow-inverted">
      <employment></employment>
    </psection>
    <psection class="bg-white shadow">
      <pemployment></pemployment>
    </psection>
    <psection class="bg-light shadow">
      <education></education>
    </psection>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Section from './components/Section.vue';
import HeroContent from './HeroContent.vue';
import NavbarTop from './NavbarTop.vue';
import SocialLinks from './components/SocialLinks.vue';
import EmploymentContent from './EmploymentContent.vue';
import PreviousEmploymentContent from './PreviousEmploymentContent.vue';
import EducationContent from './EducationContent.vue';
import backgroundImage from './media/20170625_204038_HDR.jpg';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      image: backgroundImage,
    }
  },
  components: {
    navContainer: NavbarTop,
    psection: Section,
    heroContent: HeroContent,
    employment: EmploymentContent,
    pemployment: PreviousEmploymentContent,
    education: EducationContent,
    socialLinks: SocialLinks,
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
