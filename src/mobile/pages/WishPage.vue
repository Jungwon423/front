<template>
  <WishHeader />
  <WishList />
</template>
      
<script>
import WishHeader from '@/mobile/components/WishPage/WishHeader.vue';
import WishList from '@/mobile/components/WishPage/WishList.vue';

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