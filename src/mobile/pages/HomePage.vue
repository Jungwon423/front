<template>
  <div class="width-980">
    <HomeHeader />
    <AdvertisingBox />
    <CategoryButtons />
    <ProductSet />
    <!-- <ExhibitionSet /> -->
  </div>
</template>

<script>
import HomeHeader from '@/mobile/components/HomePage/HomeHeader.vue'
import AdvertisingBox from '@/mobile/components/HomePage/AdvertisingBox.vue'
import CategoryButtons from '@/mobile/components/HomePage/CategoryButtons.vue';
import ProductSet from '@/mobile/components/HomePage/ProductSet.vue'
import ExhibitionSet from '@/mobile/components/HomePage/ExhibitionSet.vue';

export default {
  name: 'HomePage',
  components : {
    HomeHeader,
    AdvertisingBox,
    CategoryButtons,
    ProductSet,
    // ExhibitionSet,
  },
  computed : {
    logined () {
      return this.$store.getters['Login/logined']
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
.decoration-none {
  color: #000;
  font-size: 22px;
  font-family: dream;
  text-decoration : none !important; 
}
.width-980{
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
</style>
  