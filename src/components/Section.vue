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
@import "../scss/main.scss";

section {
  background-color: cornflowerblue
}
</style>
