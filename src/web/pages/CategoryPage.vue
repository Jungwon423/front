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
import ProductList from '@/web/components/CategoryPage/ProductList.vue';
import CategoryPagination from '../components/CategoryPage/CategoryPagination.vue';
import Footer from '@/web/components/Footer/KaguFooter.vue'

export default {
  name: 'CategoryPage',
  components : {
    HomeHeader,
    SideBox,
    ProductList,
    CategoryPagination,
    Footer,
  },
  watch: {
    '$route' () {
      this.$store.commit('ProductStore/SET_CURRENTCATEGORY_C', this.$route.query.categoryName)
      this.$store.commit('ProductStore/SET_CURRENTMARKET_C', this.$route.query.marketName)
      this.$store.commit('ProductStore/SET_PAGE_C', this.$route.query.page)
      this.$store.dispatch('ProductStore/FETCH_PRODUCTLIST_API')
    },
    
  },
  created(){
    this.$store.commit('ProductStore/SET_CURRENTCATEGORY_C', this.$route.query.categoryName)
    this.$store.commit('ProductStore/SET_CURRENTMARKET_C', this.$route.query.marketName)
    this.$store.commit('ProductStore/SET_PAGE_C', this.$route.query.page)
  }
}
</script>

<style scoped>
.category-page {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>