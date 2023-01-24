<template>
  <div class="inline-block">
    <div class="item-box px-2">
      {{ productCount_c }} items in <strong> {{ currentMarket_c }}</strong>
    </div>
    <ProductContainer 
      v-for="product in productList_c"
      :key="product.name"
      :name="product.name"
      :image-url="product.imageUrl"
      :price="product.price"
      :naver-price="product.naverPrice"
      :rating="0"
      :comment="0"
      :view="0"
      :market-name="product.marketName"
      :good="0"
      :bad="0"
    />
  </div>
</template>

<script>
import ProductContainer from '@/web/components/CategoryPage/ProductContainer.vue';

export default {
  name: 'ProductList',
  components: {
    ProductContainer
  },
  computed: {
    currentMarket_c: function () {
      return this.$categoryMap.get(this.$store.state.ProductStore.currentCategory_c)
    },
    productList_c: function () {
      return this.$store.state.ProductStore.productList_c
    },
    productCount_c: function () {
      return this.$store.state.ProductStore.productCount_c
    },
  },
  
  async created() {
    await this.$store.dispatch('ProductStore/FETCH_PRODUCTLIST_API')
  }
  
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