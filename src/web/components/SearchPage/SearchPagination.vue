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
        //console.log(this.$store.state.Search.page*1)
      // 왠지 모르겠는데 String으로 받아와서 warning이 떠서 *1로 숫자형으로 변환
      return this.$store.state.Search.page*1
    },
    totalPage: function () {
      console.log(this.$store.state.Search.totalPage*1)
      return this.$store.state.Search.totalPage
    }
  },
  methods: {
    changePage(page) {
      this.$router.push({
      name: 'search',
      query: {
        keyword: this.$store.state.Search.currentKeyword,
        page: page
        }},)
    }
  }
}
</script>