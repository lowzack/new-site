<template>
  <ul>
    <li :class="itemClass">
      <Link href="https://www.linkedin.com/in/lowzack/" :label="linkedin">
        <font-awesome-icon :icon="faLinkedin" aria-hidden="true"></font-awesome-icon>
      </Link>
    </li>
    <li :class="itemClass">
      <Link href="https://github.com/lowzack" :label="github">
        <font-awesome-icon :icon="faGithub" aria-hidden="true"></font-awesome-icon>
      </Link>
    </li>
    <li :class="itemClass">
      <Link href="../media/Zack_Low_Resume_2018.pdf" :label="resume">
        <font-awesome-icon :icon="faFilePdf" aria-hidden="true"></font-awesome-icon>
      </Link>
    </li>
  </ul>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import Link from './Link.vue';
import { library } from '@fortawesome/fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
library.add(faLinkedin, faGithub);

export default {
  props: ['itemClass'],
  components: {
    FontAwesomeIcon,
    Link
  },
  data() {
    return {
      label: 'socialLinks',
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
