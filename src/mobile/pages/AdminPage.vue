<template>
  <div class="width-980">
    <TitleHeader />
    <AdminMain />
  </div>
</template>
        
<script>
import AdminMain from '@/mobile/components/Admin/AdminMain.vue';
import TitleHeader from '@/mobile/components/HomePage/HomeHeader.vue';

export default {
    name: 'BrandPage',
    components : {
    TitleHeader,
    AdminMain,
    },
}
</script>

<style scoped>
</style>