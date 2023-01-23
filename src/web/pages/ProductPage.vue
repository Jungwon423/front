<template>
  <div class="product-page">
    <HomeHeader />
    <ProductInfo />
    <ProductDetail />
    <ProductReview />
    <Footer />
  </div>
</template>

<script>

import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import ProductDetail from '@/web/components/ProductPage/ProductDetail.vue'
import ProductInfo from '@/web/components/ProductPage/ProductInfo.vue'
import ProductReview from '@/web/components/ProductPage/ProductReview.vue'
import Footer from '@/web/components/Footer/KaguFooter.vue'


export default {
  name: 'ProductPage',
  components : {
    HomeHeader,
    ProductDetail,
    ProductInfo,
    ProductReview,
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