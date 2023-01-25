<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="totalPage_c"
      @update:model-value="changePage"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        page: 1,
      }
    },
    computed: {
      page_c: function() {
        // 왠지 모르겠는데 String으로 받아와서 warning이 떠서 *1로 숫자형으로 변환
        return this.$store.state.ProductStore.page_c*1
      },
      totalPage_c: function () {
        return this.$store.state.ProductStore.totalPage_c
      }
    },
    methods: {
      changePage(page) {
        this.$router.push({
        name: 'category',
        query: {
          categoryName: this.$store.state.ProductStore.currentCategory_c,
          marketName: this.$store.state.ProductStore.currentMarket_c,
          page: page}},)
      }
    }
  }
</script>