<template>
  <HomeHeader />
  <SideBox />
</template>
<script>

import HomeHeader from '@/web/components/HomePage/HomeHeader.vue'
import SideBox from '@/web/components/CategoryPage/SideBox.vue';

export default {
  name: 'CategoryPage',
  components : {
    SideBox,
    HomeHeader
  }
}
</script>
<style scoped>
</style>