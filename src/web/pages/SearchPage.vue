<template>
  <div class="category-page">
    <SearchHeader />
    <SideBox />
    <ProductList />
    <SearchPagination />
    <Footer />
  </div>
</template>

<script>
import SearchHeader from '@/web/components/SearchPage/SearchHeader.vue'
import SideBox from '@/web/components/CategoryPage/SideBox.vue';
import ProductList from '@/web/components/SearchPage/SearchMain.vue';
import SearchPagination from '@/web/components/SearchPage/SearchPagination.vue';
import Footer from '@/web/components/Footer/KaguFooter.vue'
import library from '@/library/library';

export default {
  name: 'CategoryPage',
  components : {
    SearchHeader,
    //HomeHeader,
    SideBox,
    ProductList,
    SearchPagination,
    Footer,
  },
  method:{
    
  },
  watch: {
    '$route' () {
      this.$store.commit('Search/SET_PAGE', this.$route.query.page)
      this.$store.commit('Search/SET_CURRENTKEYWORD', this.$route.query.keyword)
      this.$store.dispatch('Search/FETCH_PRODUCTLIST_API',this.$route.query.keyword)
    },
  },
}
</script>

<style scoped>
.category-page {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>