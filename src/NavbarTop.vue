<template>
  <div v-scroll="scrolled">
    <navbar class="hidden" ref="navbar"></navbar>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from './components/Navbar.vue';

// TODO: Re-evaluate this and destroy event listener properly
Vue.directive('scroll', {
  inserted: function(el, binding) {
    let f = function(evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f);
      }
    };
    window.addEventListener('scroll', f);
  },
});

export default {
  name: 'sticky-nav-container',
  components: {
    navbar: Navbar
  },
  visible: false,
  methods: {
    scrolled(evt, el) {
      const navbar = this.$refs.navbar.$el;
      if(el.getBoundingClientRect().top <= 0){
        navbar.classList.remove('hidden');
        navbar.classList.remove('ease-out');
        navbar.classList.add('ease-in');
      }else if (navbar.classList.contains('ease-in')){
        navbar.classList.remove('ease-in');
        navbar.classList.add('ease-out');
      }
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
.hidden {
  opacity: 0;
  visibility: hidden;
}

.ease-in {
  -webkit-transition: visibility 0s, opacity .5s ease-in-out;
  -moz-transition: visibility 0s, opacity .5s ease-in-out;
  -ms-transition: visibility 0s, opacity .5s ease-in-out;
  -o-transition: visibility 0s, opacity .5s ease-in-out;
  opacity: 1;
  visibility: visible;
}

.ease-out {
  -webkit-transition: visibility 1s, opacity .5s ease-out;
  -moz-transition: visibility 1s, opacity .5s ease-out;
  -ms-transition: visibility 1s, opacity .5s ease-out;
  -o-transition: visibility 1s, opacity .5s ease-out;
  opacity: 0;
  visibility: hidden;
}
</style>
