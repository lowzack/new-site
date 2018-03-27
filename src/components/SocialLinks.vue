<template>
  <ul>
    <li :class="itemClass"><a href="https://www.linkedin.com/in/lowzack/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
    <li :class="itemClass"><a href="https://github.com/takeWarning"><i class="fa fa-github-alt" aria-hidden="true"></i></a></li>
  </ul>
</template>

<script>
export default {
  props: ['itemClass']
}
</script>

<style lang="scss" scoped>
ul {
  a {
    color: inherit;
  }
  &.large {
    font-size: 3em;
  }
  &.inline {
    li {
      display: inline;
      margin: auto 2em;
    }
  }
}
</style>
