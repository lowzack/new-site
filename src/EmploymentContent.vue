<template>
  <transition appear name="slide-fade">
  <div class="p-4">
      <h1 class="mt-1 border-bottom border-primary">Current Employment</h1>
    <div class="row justify-content-sm-center p-4">
      <div class="col-sm-9 d-flex align-items-center">
        <div class="d-block w-100r">
          <h2>Constant Contact</h2>
          <h3>Software Engineer <small>July 2016 - Present</small></h3>
          <p class="description">Build and maintain scalable full stack web applications using Java and JavaScript</p>
          <ul>
            <li>Worked on numerous engineering teams including DevOps</li>
            <li>Developed full-stack applications and features in a microservice based architecture</li>
            <li>Won a company-wide hackathon and saw feature into production</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-3 text-center d-flex align-items-center">
        <img class="img-fluid mx-auto" src="http://whiteboardstudio.com/cms/wp-content/uploads/2014/04/logo-transparent.png"/>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  data: {
    show: true
  }
}
</script>

<style lang="scss" scoped>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 2s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
</style>
