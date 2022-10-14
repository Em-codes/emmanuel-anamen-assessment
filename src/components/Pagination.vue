<template>
  <div>
    <div> 
      <div class="pagination">
        <p class="page-go-btn" @click="goPrev">
          <img src="../assets/images/arrow_right.png" alt="arrow-right">
        </p>
        <button type="button" class="current-page">
          {{ query.page }}
        </button>
        <p class="page-go-btn" @click="goNext">
          <img src="../assets/images/arrow_left.png" alt="arrow-left">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Paginaton",
  props: {
    items: { type: Object, default: () => {} },
    totalPages: { type: Number, default: 0 },
  },
  data() {
    return {
        currentPage: 1
    }
  },

  computed:{
   ...mapGetters({
      query: ['queries']
   })
  },
  methods: {
    goPrev() {
      if (this.items && this.items.hasPrevPage) {
        const pg = this.currentPage-1;
        this.$emit('setPage')
      this.$store.commit('SET_PAGE', pg)
      }
    },
    goNext() {
      if (this.items && this.items.hasNextPage) {
        const pg = this.currentPage+1;
        console.log(pg, 'pg')
        this.$emit('setPage')
      this.$store.commit('SET_PAGE', pg)
      }
    },
  },
};
</script>

<style>
.pagination { display: flex; align-items: center; justify-content: center; gap: 20px; padding-bottom: 24px;}
.page-go-btn {color:#fff; font-size: 14px; cursor: pointer; max-width: 25px; height: 25px; padding: 3px; border: 2px solid #fff; border-radius: 50%; background: hsl(228, 34%, 66%);;}
.page-go-btn > img { width: 100%;}
.current-page {all: unset; background: red; color: #fff; font-size: 16px; font-weight: bold; height: 30px; width: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center;}
</style>

