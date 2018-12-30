<template>
  <ul>
    <li :class="itemClass">
      <a href="https://www.linkedin.com/in/lowzack/">
        <font-awesome-icon :icon="faLinkedin" aria-hidden="true"></font-awesome-icon>
      </a>
    </li>
    <li :class="itemClass">
      <a href="https://github.com/lowzack">
        <font-awesome-icon :icon="faGithub" aria-hidden="true"></font-awesome-icon>
      </a>
    </li>
    <li :class="itemClass">
      <a href="../media/Zack_Low_Resume_2018.pdf">
        <font-awesome-icon :icon="faFilePdf" aria-hidden="true"></font-awesome-icon>
      </a>
    </li>
  </ul>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
library.add(faLinkedin, faGithub);

export default {
  props: ['itemClass'],
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      faLinkedin,
      faGithub,
      faFilePdf
    }
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
