<template>
  <div class="width-980">
    <WishHeader />
    <WishList />
    <WishEmpty />
  </div>
</template>
      
<script>
import WishHeader from '@/web/components/WishPage/WishHeader.vue';
import WishList from '@/web/components/WishPage/WishList.vue';
import WishEmpty from '@/web/components/Empty/WishEmpty.vue';

export default {
  name: 'WishPage',
  components : {
    WishHeader,
    WishList,
    WishEmpty,
  },
}
</script>

<style scoped>
</style>