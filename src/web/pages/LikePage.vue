<template>
  <LikeHeader />
  <LikeList />
</template>
      
<script>
import LikeHeader from '@/web/components/LikePage/LikeHeader.vue';
import LikeList from '@/web/components/LikePage/LikeList.vue';

export default {
    name: 'LikePage',
    components : {
        LikeHeader,
        LikeList,
    },
}
</script>

<style scoped>
</style>