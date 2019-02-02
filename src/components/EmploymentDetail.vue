<template>
  <div>
    <h2>{{company}}</h2>
    <h3>{{title}} <small>{{dates}}</small></h3>
    <p>{{description}}</p>
    <ul v-for="highlight in highlights">
      <li>{{highlight}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'company',
    'title',
    'dates',
    'description',
    'highlights'
  ],
}
</script>

<style lang="scss" scoped>
</style>
