<template>
  <div class="main">
    <h1 class="title highlighted-primary">Current Employment</h1>
    <div class="contain">
      <div class="row">
        <div class="gr-4">
          <img class="full" src="http://whiteboardstudio.com/cms/wp-content/uploads/2014/04/logo-transparent.png"/>
        </div>
        <div class="gr-8 vcenter">
          <h1>Constant Contact</h1>
          <h2>Software Engineer <small>July 2016 - Present</small></h2>
          <p class="description">Build and maintain scalable full stack web applications using Java and JavaScript</p>
          <ul>
            <li>Worked on numerous engineering teams including DevOps</li>
            <li>Developed full-stack applications and features in a microservice based architecture</li>
            <li>Won a company-wide hackathon and saw feature into production</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
  @import "./scss/index.scss";

  .main {
    margin: 0 auto;
  }
  .title {
    margin-bottom: 1em;
  }
  .contain {
    margin: 0 auto;
    max-width: 960px;
    .gr-4 {
      padding: 3em;
    }
    h1 {
      font-size: 2.5em;
    }
    h2 {
      font-size: 2em;
      small {
        font-size: .5em;
      }
    }
    .description {
      margin-top: 1em;
      font-size: 1.25em;
      line-height: 1.25em;
    }
    ul {
      li {
        line-height: 1.5em;
        margin-left: 2em;
        list-style: circle;
      }
    }
  }
  .vcenter {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .full {
    width: 100%;
  }
</style>
