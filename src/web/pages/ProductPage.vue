<template>
  <HomeHeader />
  <ProductInfo />
  <ProductDetail />
  <ProductReview />
</template>
  <script>
  
  import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
  import ProductDetail from '@/web/components/ProductPage/ProductDetail.vue'
  import ProductInfo from '@/web/components/ProductPage/ProductInfo.vue'
  import ProductReview from '@/web/components/ProductPage/ProductReview.vue'
  

  export default {
    name: 'ProductPage',
    components : {
      HomeHeader,
      ProductDetail,
      ProductInfo,
      ProductReview,
    }
  }
  </script>
  <style scoped>
  </style>