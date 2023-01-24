<template>
  <div class="inline-block">
    <div class="item-box px-2">
      12,911 items in <strong>생활/건강</strong>
    </div>
    <ProductContainer />
    <ProductContainer />
    <ProductContainer />
  </div>
</template>

<script>
import ProductContainer from '@/web/components/CategoryPage/ProductContainer.vue';

export default {
  name: 'ProductList',
  components: {
    ProductContainer
  },
}
</script>

<style scoped>
.inline-block {
  display: inline-block;
  position: relative;
  width:950px;
}
.item-box{
  line-height:50px;
  margin-top:10px;
  margin-left:10px;
  height:50px;
  width:950px;
  border-style:solid;
  border-width:1px;
  border-color: #E0E0E0;
  border-radius:5px;
}
</style>