<template>
  <div class="width-980">
    <SimpleHeader />
    <HomeHeader />
    <ProductList />
    <CategoryPagination />
    <Footer />
  </div>
</template>

<script>
import SimpleHeader from '@/mobile/components/HomePage/SimpleHeader.vue';
import HomeHeader from '@/mobile/components/HomePage/HomeHeader.vue'
import SideBox from '@/mobile/components/CategoryPage/SideBox.vue';
import ProductList from '@/mobile/components/CategoryPage/ProductList.vue';
import CategoryPagination from '@/mobile/components/CategoryPage/CategoryPagination.vue';
import Footer from '@/mobile/components/Footer/KaguFooter.vue'

export default {
  name: 'CategoryPage',
  components : {
    SimpleHeader,
   // HomeHeader,
    ProductList,
    CategoryPagination,
    Footer,
  },
  watch: {
    '$route' () {
      this.$store.commit('Category/SET_CURRENTCATEGORY', this.$route.query.categoryName)
      this.$store.commit('Category/SET_CURRENTMARKET', this.$route.query.marketName)
      this.$store.commit('Category/SET_PAGE', this.$route.query.page)
      this.$store.dispatch('Category/FETCH_PRODUCTLIST_API')
    },
    
  },
  created(){
    this.$store.commit('Category/SET_CURRENTCATEGORY', this.$route.query.categoryName)
    this.$store.commit('Category/SET_CURRENTMARKET', this.$route.query.marketName)
    this.$store.commit('Category/SET_PAGE', this.$route.query.page)
  }
}
</script>

<style scoped>
</style>