<template>
  <div id="app">
    <psection class="background-cover py-2" :image="image">
      <hero-content></hero-content>
    </psection>
    <psection class="bg-light">
      <employment></employment>
    </psection>
    <psection class="bg-white">
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
    education: EducationContent,
    socialLinks: SocialLinks,
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style lang="scss" scoped>

</style>
