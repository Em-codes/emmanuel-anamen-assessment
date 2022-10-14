<template>
  <div>
    <div>
      <div class="pagination">
        <p class="page-go-btn" @click="goPrev">Prev</p>
        <button type="button" class="current-page">
          {{ page }}
        </button>
        <p class="page-go-btn" @click="goNext">Next</p>
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
        this.$emit('setPage',  this.page)
      }
    },
    goNext() {
      if (this.items.hasNextPage) {
        this.page++;
        this.$emit('setPage', this.page)
      }
    },
  },
};
</script>

<style>
.pagination { display: flex; align-items: center; justify-content: center; gap: 20px;}
.page-go-btn {color:#fff; font-size: 14px; cursor: pointer;}
.current-page {background: red; color: #fff; font-size: 14px; height: 40px; width: 40px; display: flex; align-items: center; justify-content: center;}
</style>

