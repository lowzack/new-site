<template>
  <div class="container">
    <h1 class="title highlighted-primary">Personal Intrests</h1>
    <p>In my free time I enjoy playing and writing music. Ihave been playing music for most of my life
      and have been in multiple bands as a songwriter, trumpeter, bassist, and rhythm/lead guitarist. Currently I am
    working on honing in my songwriting and guitar playing, and attempting to push myself to higher levels of
  technical ability. In doing this I am also trying to branch out into different genres</p>
    <p>I also enjoy cooking and trying different foods. With this food affection, I also
    have an affection for craft beer, and attend many food and beer festivals in attempts to try as much as possible.</p>
    <p>Diehard Red Sox and Patriots fan, that's all I really need to say about that.</p>
  </div>
</template>

<script>
import NavContainer from './NavbarTop.vue';
import SocialLinks from './SocialLinks.vue'

export default {
  components: {
    navContainer: NavContainer,
    socialLinks: SocialLinks
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/index.scss";
.container {
  max-width: 960px;
  margin: 0 auto;
  width: 100%;

  p {
    font-size: 1.25em;
    text-indent: 2em;
    padding-top: 2em;
  }
}
</style>
