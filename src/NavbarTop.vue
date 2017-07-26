<template>
  <div v-scroll="scrolled">
    <navbar style="display:none" ref="navbar"></navbar>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from './components/Navbar.vue';

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
  methods: {
    scrolled(evt, el) {
      if(el.getBoundingClientRect().top <= 0){
        console.log(el.getBoundingClientRect().top <= 0);
        this.$refs.navbar.$el.style.display = '';
      }else {
        this.$refs.navbar.$el.style.display = 'none';
      }
      return false;
    }
  }
}
</script>

<style lang="scss">
</style>
