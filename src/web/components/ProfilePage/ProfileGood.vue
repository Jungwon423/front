<template>
  <div class="my-12 default-info2">
    <div class="pa-6 default-title">
      내가 추천한 상품
    </div>
    <WishContainer />
    <div class="default-table" />
  </div>
</template>

<script>
import WishContainer from '@/web/components/WishPage/WishContainer.vue';

export default {
    name: 'ProfileGood',
    components: {
        WishContainer
    },
    data () {
        return {}
    },
}
</script>

<style>

</style>