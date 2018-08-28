<template>
  <transition appear name="slide-fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "../scss/animations";
</style>
