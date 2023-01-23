<template>
  <div class="category-page">
    <HomeHeader />
    <SideBox />
    <ProductList />
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import SideBox from '@/web/components/CategoryPage/SideBox.vue';
import ProductList from '@/web/components/CategoryPage/ProductList.vue';
import Footer from '@/web/components/Footer/KaguFooter.vue'

export default {
  name: 'CategoryPage',
  components : {
    HomeHeader,
    SideBox,
    ProductList,
    Footer,
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