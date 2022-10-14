<template>
  <div class="display-board">
    <div>
       <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .display-board { margin-left: 300px; padding: 0 30px; }

  /* MEDIA QUERIES */
  @media (max-width: 767px) {
    .display-board { margin-left: 0; padding: 0 30px; }
  }
  @media (max-width: 480px) {
    .display-board { margin-left: 0; padding: 0 16px; }
  }
</style>