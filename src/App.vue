<template>
  <div id="app">
        <linear-loader v-if="loading"/>
    <router-view></router-view>
  </div>
</template>

<script>
import LinearLoader from './components/LinearLoader.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    LinearLoader
  },

   computed: {
    ...mapGetters({
      loading: ["loadingState"],
    })
   }
  
}
</script>

<style>

</style>
