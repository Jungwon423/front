<template>
  <div class="inline-block">
    <div class="item-box px-2">
      검색결과 &nbsp; {{ productCount }} 건
    </div>
    <v-row
      v-if="productList.length == 0"
      class="text-center"
    >
      <v-col>
        <div class="glasses">
          <v-img
            width="80"
            height="80"
            src="@/assets/돋보기.png"
          />
        </div>
        <div class="empty-text1">
          조건에 맞는 상품이 없습니다.
        </div>
        <div class="empty-text2">
          곧 더 좋은 상품으로 찾아오겠습니다.
        </div>
      </v-col>
    </v-row>
  
  
    <ProductContainer 
      v-for="product in productList"
      :key="product.name"
      :name="product.name"
      :image-url="product.imageUrl"
      :price="product.price"
      :naver-price="product.naverPrice"
      :rating="product.rating"
      :comment="product.comments.length"
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
      productList: function () {
        console.log(this.$store.state.Category.productList)
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
  .glasses{
    position:relative;
    top:30%;
    left:45.5%;
  }
  .empty-text1{
    margin-top:100px;
    font-size:20px;
    font-weight: 600;
  }
  .empty-text2{
    font-size:17px;
  }
  </style>