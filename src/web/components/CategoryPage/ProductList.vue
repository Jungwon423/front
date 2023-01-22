<template>
  <div class="inline-block">
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
    position: top;
}
</style>