<template>
  <div>
    <HomeHeader />
    <AdvertisingBox />
    <CategoryButtons />
    <ProductSet />
    <ExhibitionSet />
  </div>
</template>

<script>
import HomeHeader from '@/web/HomePage/components/HomeHeader.vue'
import AdvertisingBox from '@/web/HomePage/components/AdvertisingBox.vue'
import CategoryButtons from '@/web/HomePage/components/CategoryButtons.vue';
import ProductSet from '@/web/HomePage/components/ProductSet.vue'
import ExhibitionSet from '@/web/HomePage/components/ExhibitionSet.vue';

export default {
  name: 'HomePage',
  components : {
    HomeHeader,
    AdvertisingBox,
    CategoryButtons,
    ProductSet,
    ExhibitionSet
  }
}
</script>
  