<template>
  <div class="p-4">
    <h2 class="h1 mt-1 border-bottom border-primary">Education</h2>
    <div class="row justify-content-sm-center p-4">
      <div class="col-md-4 text-center d-flex align-items-center logo-container mb-3 mb-md-0">
        <img class="img-fluid mx-auto logo" alt="RIT Logo" src="./media/rit_logo.png"/>
      </div>
      <div class="col-md-8 d-flex align-items-center">
        <div class="d-block w-100 text-right">
          <h2>Rochester Institute of Technology</h2>
          <h3>Information Technology <small>2016</small></h3>
          <h4>Web and Mobile Development <small>Concentration</small></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
@import './scss/main.scss';

.logo {
  max-width: 100%;

  @include media-breakpoint-down(sm) {
    max-width: 50%;
  }
}
</style>
