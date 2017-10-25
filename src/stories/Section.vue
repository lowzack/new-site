<template>
  <section :style="style">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'section',
  props: ["image"],
  data() {
    return {}
  },
  computed: {
    style() {
      if (this.image) {
        return `background-image:url(${this.image});background-size:cover`;
      }
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/index.scss";

section {
  padding: $section-padding 0;
  min-height: 60vh;
  display: flex;
  &.background-cover {
    background-size: cover;
    background-color: cornflowerblue;
  }
  &.hero-primary {
    background-color: $accent-color;
  }
  &.primary {
    background-color: $primary-background;
  }
  &.secondary {
    background-color: $secondary-background;
  }
  &.footer {
    background-color: #000;
  }
  @include box-shadow (0, -5px, 10px, rgba(0,0,0,.2), true)
}
</style>
