<template>
  <button class="button-styles" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button',

    methods: {
      onClick () {
      }
    }
  }
</script>

<style lang='scss'>
  .button-styles {
    border: 1px solid #eee;
    border-radius: 3px;
    cursor: pointer;
    font-size: 15pt;
    padding: 8px 15px;
    margin: 10px;
  }
  .color {
      background-color: #3fa;
      border-color: darken(#3fa, 15%);
  }
</style>
