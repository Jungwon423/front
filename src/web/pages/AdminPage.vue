<template>
  <div class="width-980">
    <TitleHeader />
    <AdminMain />
  </div>
</template>
        
<script>
import AdminMain from '@/web/components/Admin/AdminMain.vue';
import TitleHeader from '@/web/components/HomePage/HomeHeader.vue';

export default {
    name: 'BrandPage',
    components : {
    TitleHeader,
    AdminMain,
    },
    watch: {
    '$route' () {
      this.$store.dispatch('User/FETCH_PRODUCTLIST_API')
    },
  },
}
</script>

<style scoped>
</style>