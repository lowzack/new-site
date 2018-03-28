<template>
  <ul>
    <li :class="itemClass">
      <a href="https://www.linkedin.com/in/lowzack/">
        <font-awesome-icon :icon="['fab', 'linkedin']" aria-hidden="true"></font-awesome-icon>
      </a>
    </li>
    <li :class="itemClass">
      <a href="https://github.com/takeWarning">
        <font-awesome-icon :icon="['fab', 'github']" aria-hidden="true"></font-awesome-icon>
      </a>
    </li>
  </ul>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(brands);

export default {
  props: ['itemClass'],
  components: {
    FontAwesomeIcon
  }
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
