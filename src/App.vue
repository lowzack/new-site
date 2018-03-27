<template>
  <div id="app">
    <psection class="background-cover py-2" :image="image">
      <hero-content></hero-content>
    </psection>
    <psection class="primary">
      <employment></employment>
    </psection>
    <psection class="secondary">
      <personal></personal>
    </psection>
    <psection class="footer">
      <div class="container">
        <social-links class="social-icons inline"></social-links>
      </div>
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
import PersonalContent from './PersonalContent.vue';
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
    socialLinks: SocialLinks,
    personal: PersonalContent,
  },
  mounted() {
    console.log('mounted');
  }
}
</script>

<style lang="scss" scoped>
@import './scss/resets.scss';
@import './scss/sizing.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

.containter {
  width: 100%;
}

.social-icons {
  font-size: 3em;
  text-align: center;
  padding-top: 2em;
  color: #FFF;
}
</style>
