<template>
  <div class="navigation-box">
    <div class="cate-btn">
      <DrawerCategory />
    </div>
    <div class="brand-btn">
      <DrawerBrand />
    </div>
  </div>
  <div class="item-box px-2">
    <div class="item-text">
      {{ productCount }}개의 검색 결과
    </div>
  </div>
  <ProductContainer 
    v-for="product in productList"
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
</template>

<script>
import ProductContainer from '@/mobile/components/CategoryPage/ProductContainer.vue';
import DrawerCategory from '@/mobile/components/CategoryPage/DrawerCategory.vue';
import DrawerBrand from '@/mobile/components/CategoryPage/DrawerBrand.vue';
export default {
  name: 'ProductList',
  components: {
    DrawerCategory,
    DrawerBrand,
    ProductContainer,
  },
  computed: {
    productList: function () {
      return this.$store.state.Category.productList
    },
    productCount: function () {
      return this.$store.state.Category.productCount
    },
    currentCategory: function () {
      return this.$categoryMap.get(this.$store.state.Category.currentCategory)
    }
  },
  
  async created() {
    await this.$store.dispatch('Category/FETCH_PRODUCTLIST_API')
  }
  
}
</script>

<style scoped>
.inline-block {
  display: inline-block;
  position: relative;
}
.navigation-box{
  display:flex;
  height:100px;
}
.item-box{
  height:100px;
  background-color:#EEEEEE;
}
.item-text{
  font-size:33px;
  line-height:50px;
  padding-top:15px;
  margin-left:50px;
}
.cate-btn{
  margin-left:20px;
  margin-top:10px;
  display:inline-block;
  font-size:30px;
  width:200px;
  height:80px;
  border-color:#E0E0E0;
  border-width:3px;
  border-style:solid;
  border-radius:20px;
  text-align: center;
}
.brand-btn{
  display:inline-block;
  margin-top:10px;
  margin-left:20px;
  font-size:33px;
  width:180px;
  height:80px;
  border-color:#E0E0E0;
  border-width:3px;
  border-style:solid;
  border-radius:20px;
  text-align: center;
}
.btn-text{
  position:relative;
  margin-top:6%;
  margin-left:10%;
}
.icon1{
  position:relative;
  margin-top:50%;
  margin-left:0%;
}
</style>