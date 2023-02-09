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
    <NoGoodList 
      v-if="recommends == null || recommends.length == 0"
    />
    <ProfileGood
      v-for="recommend in recommends"
      :key="recommend"
      :good-number="recommend.goodCount"
      :bad-number="recommend.badCount"
      :image-url="recommend.imageUrl"
      :name="recommend.name"
      :price="recommend.price"
      :market-name="recommend.marketName"
      :naver-price="recommend.naverPrice"
    />
  </div>
</template>
    
<script>
import ProfileGood from '@/web/components/ProfilePage/ProfileGood.vue';
import NoGoodList from './NoGoodList.vue';

export default {
    name: 'ProductList',
    components: {
      ProfileGood,
      NoGoodList
    },
    computed: {
      recommends: function() {
        return this.$store.state.Profile.recommends
      }
    }
}
</script>

<style>
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