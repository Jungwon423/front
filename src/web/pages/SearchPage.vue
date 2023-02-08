<template>
  <div class="category-page">
    <HomeHeader />
    <SideBox />
    <ProductList />
    <CategoryPagination />
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import SideBox from '@/web/components/CategoryPage/SideBox.vue';
import ProductList from '@/web/components/SearchPage/SearchMain.vue';
import CategoryPagination from '../components/CategoryPage/CategoryPagination.vue';
import Footer from '@/web/components/Footer/KaguFooter.vue'
import library from '@/library/library';

export default {
  name: 'CategoryPage',
  components : {
    HomeHeader,
    SideBox,
    ProductList,
    CategoryPagination,
    Footer,
  },
  method:{
    
  },
  watch: {
    '$route' () {
      console.log(this.$route.query.keyword)
      //this.$store.commit('Search/SET_CURRENTKEYWORD', this.$route.query.keyword)
      this.$store.commit('Search/SET_PAGE', this.$route.query.page)
      this.$store.dispatch('Search/FETCH_PRODUCTLIST_API')
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