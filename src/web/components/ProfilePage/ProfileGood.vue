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
    <div class="good-container">
      <div class="img-wrapper">
        <v-img
          width="180"
          height="180"
          src="https://i.ebayimg.com/images/g/A5UAAOSwK39hi5H1/s-l300.jpg"
        />
      </div>
      <div class="good-wrapper1">
        <div class="text-wrapper">
          <span>추천 10</span>
          <span class="mx-2">비추천 7</span>
        </div>
        <div class="text-wrapper1">
          Canon Cemra EOS 200D, Black 10x zoomCan
          Canon Cemra EOS 200D, Black 10x zoomCan
          Canon Cemra EOS 200D, Black 10x zoomCan
        </div>
      </div>
      <div class="good-wrapper2">
        <div class="text-wrapper2">
          87000원
        </div>
      </div>
      <div class="good-wrapper3">
        <div class="text-wrapper3">
          Amazon
        </div>
      </div>
      <div class="naver-price">
        <div class="text-wrapper4">
          110000원
        </div>
      </div>
      <div class="other">
        <div>
          <v-btn>삭제</v-btn>
        </div>
      </div>
    </div>
  </div>
  <WishContainer />
</template>

<script>
import WishContainer from '@/web/components/WishPage/WishContainer.vue';

export default {
    name: 'ProfileGood',
    components: {
      //WishContainer
    },
    data () {
        return {}
    },
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
.good-container{
  position:relative;
  border: 1px solid;
  border-width:0.5px;
  border-color:#EEEEEE;
  border-radius: 8px;
  display:flex;
  text-align: start;
  height:230px;
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
.img-wrapper{
  display:inline-block;
  margin-top:25px;
  width:180px;
}
.good-wrapper1{
  margin-top:30px;
  display:inline-block;
  width:300px;
  height:230px;
}
.good-wrapper2{
  display:inline-block;
  width:180px;
  height:230px;
}
.good-wrapper3{
  display:inline-block;
  width:120px;
  height:230px;
}
.text-wrapper{
  font-size:15px; 
  color:#616161;
}
.text-wrapper1{
  position:relative;
  top:7%;
  padding-right:30px;
  font-weight:500;
  white-space:normal;
  display:-webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow:ellipsis;
}
.text-wrapper2{
  margin-top:100px;
  font-size:16px;
  font-weight:500;
  margin-left:20px;
}
.text-wrapper3{
  margin-top:100px;
  font-size:16px;
  font-weight:500;
}
.text-wrapper4{
  margin-top:100px;
  font-size:16px;
  font-weight:500;
}
.naver-price{
  color:#FF1744;
  font-size:17px;
  font-weight:600;
  display:inline-block;
  position:relative;
  left:4%;
}
.other{
  position:relative;
  float:right;
  text-align: end;
  top:80%;
  font-size:14px;
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