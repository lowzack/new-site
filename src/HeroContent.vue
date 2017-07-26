<template>
  <div class="container">
    <div>
      <h1 class="name">Zack Low</h1>
      <nav-container></nav-container>
      <h2 class="title">Software Engineer</h2>
      <h3>I enjoy building modern scalable web applications across the entire stack with experience front-end engineering in JavaScript, API design and development, and DevOps.</h3>
    </div>
  </div>
</template>

<script>
import NavContainer from './NavbarTop.vue';

export default {
  components: {
    navContainer: NavContainer
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/colors.scss";
@import "./scss/mixins.scss";

.container {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:1em;
  background-color: rgba(0, 0, 0, 0.3);
  text-shadow: 0px 0px 5em #000;
}
h1 {
  color: $white;
  font-size: 5em;
}
h2 {
  color: $white;
  font-size: 3.5em;
}
h3 {
  color: $white;
  padding-top: .5em;
  margin-bottom: auto;
}
</style>
