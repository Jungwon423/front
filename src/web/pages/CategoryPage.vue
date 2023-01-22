<template>
  <div class="category-page">
    <HomeHeader />
    <SideBox />
    <ProductList />
  </div>
</template>

<script>
import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import SideBox from '@/web/components/CategoryPage/SideBox.vue';
import ProductList from '@/web/components/CategoryPage/ProductList.vue';

export default {
  name: 'CategoryPage',
  components : {
    HomeHeader,
    SideBox,
    ProductList
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