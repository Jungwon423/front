<template>
  <div class="my-12 default-info3">
    <div class="pa-6">
      내가 추천한 상품
    </div>
    <hr class="h-line4">
    <div class="product-detail1 pa-6">
      상품 정보
      <span class="product-detail2 px-10">상품 금액</span> 
      <span class="mx-12">브랜드</span>
      <span class="mx-8">네이버 최저가</span>
    </div>
    <v-row class="text-center">
      <v-col>
        <div class="messages">
          <v-img
            width="120"
            height="120"
            src="@/assets/프레임손가락.png"
          />
        </div>
        <div class="empty-review1">
          선호하는 제품을
        </div>
        <div class="empty-review1">
          추천하여 다른 사용자들과 공유해보세요.
        </div>
      </v-col>
    </v-row>
    <ProfileGood />
  </div>
</template>
    
<script>
//import ProductContainer from '@/web/components/CategoryPage/ProductContainer.vue';
import ProfileGood from '@/web/components/ProfilePage/ProfileGood.vue';

export default {
    name: 'ProductList',
    components: {
    ProfileGood,
    },
    /*
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
    */
}
</script>

<style scoped>
.default-info3{
margin-left:40px;
width:980px;
font-size:20px;
font-weight: 600;
color:#424242;
}
.h-line4{
border-style:solid;
border-width:3px;
border-radius:3px;
border-color:#BDBDBD;
width:930px;
}
.product-detail1{
margin-left:240px;
font-size:17px;
height:80px;
}
.product-detail2{
margin-left:120px;
}
.messages{
  position:relative;
  margin-top:20px;
  margin-bottom:20px;
  left:45.5%;
}
.empty-review1{
  font-size:20px;
  color:#616161;
}
</style>