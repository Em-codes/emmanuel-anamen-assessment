<template>
  <div>
    <div> 
      <div class="pagination">
        <p class="page-go-btn" @click="goPrev">
          <img src="../assets/images/arrow_right.png" alt="arrow-right">
        </p>
        <button type="button" class="current-page">
          {{ page }}
        </button>
        <p class="page-go-btn" @click="goNext">
          <img src="../assets/images/arrow_left.png" alt="arrow-left">
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Paginaton",
  props: {
    items: { type: Object, default: () => {} },
    totalPages: { type: Number, default: 0 },
  },
  data() {
    return {
        page: 1
    }
  },

  methods: {
    goPrev() {
      if (this.items.hasPrevPage) {
        this.page--;
        this.items.pagingCounter--
        this.$emit('setPage',  this.page)
      }
    },
    goNext() {
      if (this.items.hasNextPage) {
        this.page++;
        this.items.pagingCounter++
        this.$emit('setPage', this.page)
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

