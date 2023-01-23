<template>
  <div class="home-page">
    <HomeHeader />
    <AdvertisingBox />
    <CategoryButtons />
    <ProductSet />
    <!-- <ExhibitionSet /> -->
  </div>
</template>

<script>
import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import AdvertisingBox from '@/web/components/HomePage/AdvertisingBox.vue'
import CategoryButtons from '@/web/components/HomePage/CategoryButtons.vue';
import ProductSet from '@/web/components/HomePage/ProductSet.vue'
// import ExhibitionSet from '@/web/components/HomePage/ExhibitionSet.vue';

export default {
  name: 'HomePage',
  components : {
    HomeHeader,
    AdvertisingBox,
    CategoryButtons,
    ProductSet,
    // ExhibitionSet
  },
  async created () {
    await this.$store.dispatch('ProductStore/FETCH_TOP3_PRODUCTLIST_API')
  }
}
</script>

<style scoped>
.home-page {
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
</style>
  