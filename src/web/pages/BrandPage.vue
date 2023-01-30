<template>
  <div class="width-1200">
    <TitleHeader />
    <BrandMain />
  </div>
</template>
      
  <script>
import BrandMain from '@/web/components/BrandPage/BrandMain.vue';
import TitleHeader from '@/web/components/HomePage/HomeHeader.vue';

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