<template>
  <div class="product-page">
    <HomeHeader />
    <ProductInfo />
    <ProductTab />
    <Footer />
  </div>
  <div @click="scrollTop()">
    <v-avatar
      class="scroll-btn"
      color="#3E2723"
      size="50"
    >
      <v-img
        width="30"
        height="30"
        src="@/assets/mdi/arrow-up-custom.png"
      />
    </v-avatar>
  </div>
</template>

<script>

import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import ProductTab from '@/web/components/ProductPage/ProductTab.vue'
import ProductInfo from '@/web/components/ProductPage/ProductInfo.vue'
import Footer from '@/web/components/Footer/KaguFooter.vue'

export default {
  name: 'ProductPage',
  components : {
    HomeHeader,
    ProductTab,
    ProductInfo,
    Footer,
  },
  async created() {
    await this.$store.dispatch('Product/FETCH_PRODUCTDETAIL_API', this.$route.query.name)
  },
  methods: {
    scrollTop(){
      window.scrollTo({top:0, left:0, behavior:'smooth'});
    },
  }
}
</script>

<style scoped>
.product-page {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.scroll-btn{
  position:fixed;
  bottom:10%;
  right:3%;
  float:right;
  cursor:pointer;
}
</style>