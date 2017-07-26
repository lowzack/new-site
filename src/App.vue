<template>
  <div id="app">
    <psection class="background-cover" :image="image">
      <hero-content></hero-content>
    </psection>
    <psection class="primary">
      <employment></employment>
    </psection>
    <psection class="secondary">
    </psection>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Section from './components/Section.vue';
import HeroContent from './HeroContent.vue';
import NavbarTop from './NavbarTop.vue'
import EmploymentContent from './EmploymentContent.vue'
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
    employment: EmploymentContent
  },
}
</script>

<style lang="scss">
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
</style>
