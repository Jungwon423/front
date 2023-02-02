<template>
  <div class="product-page">
    <HomeHeader />
    <ProductInfo />
    <ProductTab />
    <Footer />
  </div>
</template>

<script>

import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import ProductTab from '@/web/components/ProductPage/ProductTab.vue'
import ProductInfo from '@/web/components/ProductPage/ProductInfo.vue'
import ProductReview from '@/web/components/ProductPage/ProductReview.vue'
import Footer from '@/web/components/Footer/KaguFooter.vue'


export default {
  name: 'ProductPage',
  components : {
    HomeHeader,
    ProductTab,
    ProductInfo,
    //ProductReview,
    Footer,
  }
}
</script>

<style scoped>
.product-page {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
</style>