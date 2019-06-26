<template>
  <a :href="href" v-on:click="onClick"><slot></slot></a>
</template>

<script>
export default {
  name: "Link",
  props: ["href", 'title', 'label'],
  data() {
    return {}
  },
  methods: {
    onClick(event) {
      event.preventDefault();
      this.$ga.event({
        eventCategory: 'click',
        eventAction: 'navigateToExternal',
        eventLabel: this.$props.label,
        eventValue: this.$props.href
      });
      window.location.href = this.$props.href;
    }
  }
}
</script>
<style/>
