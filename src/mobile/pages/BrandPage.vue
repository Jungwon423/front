<template>
  <div class="width-1200">
    <TitleHeader />
    <BrandMain />
  </div>
</template>
      
  <script>
import BrandMain from '@/mobile/components/BrandPage/BrandMain.vue';
import TitleHeader from '@/mobile/components/HomePage/HomeHeader.vue';

export default {
    name: 'BrandPage',
    components : {
    TitleHeader,
    BrandMain,
},
}
</script>

<style scoped>
</style>