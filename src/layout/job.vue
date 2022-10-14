<template>
  <div>
    <DefaultLayout>
    <DisplayBoard>
       <Header/>
        <slot></slot>
    </DisplayBoard> 
  </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from '../layout/default.vue'
import DisplayBoard from '../components/DisplayBoard.vue'
import Header from '../components/Header.vue'
export default {
  components: { Header, DefaultLayout, DisplayBoard },

}
</script>

<style>

</style>