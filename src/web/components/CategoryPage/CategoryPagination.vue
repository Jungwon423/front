<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="totalPage"
      @update:model-value="changePage"
    />
  </div>
</template>

<script>
  export default {
    computed: {
      page: function() {
        // 왠지 모르겠는데 String으로 받아와서 warning이 떠서 *1로 숫자형으로 변환
        return this.$store.state.Category.page*1
      },
      totalPage: function () {
        return this.$store.state.Category.totalPage
      }
    },
    methods: {
      changePage(page) {
        this.$router.push({
        name: 'category',
        query: {
          categoryName: this.$store.state.Category.currentCategory,
          marketName: this.$store.state.Category.currentMarket,
          page: page}},)
      }
    }
  }
</script>