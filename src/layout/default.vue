<template>
  <div>
    <Sidebar/>
    <slot></slot>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
  components: { Sidebar },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>