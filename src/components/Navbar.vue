<template>
  <nav>
    <div class="menu-indicator"></div>
    <div class="row">
      <div class="gr-4"></div>
      <div class="gr-4"><h1>Zack Low</h1></div>
      <div class="gr-4">
        <social-links class="inline"></social-links>
      </div>
    </div>
  </nav>
</template>

<script>
import SocialLinks from './SocialLinks.vue';

export default {
  name: 'fixed-nav',
  components: {
    socialLinks: SocialLinks,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang='scss' scoped>

</style>
