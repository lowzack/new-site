<template>
  <section :style="style">
    <div class="container">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'section',
  props: ["image", 'title'],
  data() {
    return {}
  },
  computed: {
    style() {
      if (this.image) {
        return `background-image:url(${this.image});`;
      }
      return '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.background-cover {
  background-size: cover;
  background-position: center;
}
</style>
