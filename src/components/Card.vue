<template>
  <div class="border rounded d-flex flex-column p-4 align-items-start shadow zoom bg-white">
      <div class="d-flex w-100 h-100 align-items-center">
        <div class="d-block mx-auto">
          <img class="d-block img-fluid mb-4" :src="image">
        </div>
      </div>
      <div class="mt-auto">
        <h4 class="">{{title}}</h4>
        <h5 class="mb-2">{{subtitle}}</h5>
        <h6 class="mb-2">{{heading}}</h6>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['image', 'title', 'subtitle', 'heading']
}
</script>

<style lang="scss">
.zoom {
    transition: transform .2s; /* Animation */
}

.zoom:hover {
    transform: scale(1.05); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>
