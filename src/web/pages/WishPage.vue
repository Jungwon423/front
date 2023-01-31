<template>
  <WishHeader />
  <WishList />
</template>
      
<script>
import WishHeader from '@/web/components/WishPage/WishHeader.vue';
import WishList from '@/web/components/WishPage/WishList.vue';

export default {
  name: 'WishPage',
  components : {
    WishHeader,
    WishList,
  },
}
</script>

<style scoped>
</style>