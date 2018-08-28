<template>
  <div class="p-4">
      <h1 class="mt-1 border-bottom border-primary">Current Employment</h1>
    <div class="row justify-content-sm-center p-4">
      <div class="col-sm-9 d-flex align-items-center">
        <div class="d-block w-100r">
          <h2>Constant Contact</h2>
          <h3>Software Engineer <small>July 2016 - Present</small></h3>
          <p class="description">Build and maintain scalable full stack web applications using Java and JavaScript</p>
          <ul>
            <li>Improved and maintained the front-end of a customer-facing WYSIWYG email editor.</li>
            <li>Aided in the development and architecture of a feature enabling customers to A/B test their email marketing campaigns.</li>
            <li>Developed a service to validate Swagger API documentation against the company’s REST API standards.</li>
          </ul>
        </div>
      </div>
      <div class="col-sm-3 text-center d-flex align-items-center">
        <img class="img-fluid mx-auto" src="./media/constant_contact_logo.png"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: {
    show: true
  }
}
</script>

<style lang="scss">
</style>
