<template>
  <div class="product-page">
    <HomeHeader />
    <ProductInfo />
    <ProductTab />
    <Footer />
  </div>
</template>

<script>

import HomeHeader from '@/mobile/components/HomePage/HomeHeader.vue'
import ProductTab from '@/mobile/components/ProductPage/ProductTab.vue'
import ProductInfo from '@/mobile/components/ProductPage/ProductInfo.vue'
import ProductReview from '@/mobile/components/ProductPage/ProductReview.vue'
import Footer from '@/mobile/components/Footer/KaguFooter.vue'


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