<template>
  <div class="home-page">
    <div> 로그인 여부 : {{ logined }}</div>
    <HomeHeader />
    <AdvertisingBox />
    <CategoryButtons />
    <ProductSet />
    <!-- <ExhibitionSet /> -->
    <Footer />
  </div>
</template>

<script>
import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import AdvertisingBox from '@/web/components/HomePage/AdvertisingBox.vue'
import CategoryButtons from '@/web/components/HomePage/CategoryButtons.vue';
import ProductSet from '@/web/components/HomePage/ProductSet.vue'
import Footer from '@/web/components/Footer/KaguFooter.vue'
import ExhibitionSet from '@/web/components/HomePage/ExhibitionSet.vue';

export default {
  name: 'HomePage',
  components : {
    HomeHeader,
    AdvertisingBox,
    CategoryButtons,
    ProductSet,
    // ExhibitionSet,
    Footer,
  },
  computed : {
    logined : function() {
      return this.$store.state.Login.logined
    }
  },
  async created () {
    await this.$store.dispatch('Home/FETCH_TOP3_PRODUCTLIST_API')
  }
}
</script>

<style>
@font-face{
  font-family: 'dohyeun';
  src:url('@/assets/font/BMDOHYEON_ttf.ttf') format('truetype');
}
.home-page {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
</style>
  