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
    <div class="good-container">
      <div class="img-wrapper">
        <v-img
          width="180"
          height="180"
          src="https://i.ebayimg.com/images/g/A5UAAOSwK39hi5H1/s-l300.jpg"
        />
      </div>
      <div class="text-box">
        <div style="font-size:15px; color:#616161">
          <span>추천 10</span>
          <span class="mx-2">비추천 7</span>
        </div>
        <div class="text-wrapper">
          Canon Cemra EOS 200D, Black 10x zoom
        </div>
        <div class="text-wrapper2">
          87000원
        </div>
        <div class="text-wrapper2">
          Amazon
        </div>
        <div class="naver-price">
          <div>
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
  margin-left:280px;
  font-size:17px;
  height:80px;
}
.product-detail2{
  margin-left:70px;
}
.img-wrapper{
  display:inline-block;
  margin-top:25px;
  width:180px;
}
.text-box{
  margin-top:50px;
  margin-left:10px;
  display:inline-block;
}
.text-wrapper{
  position:relative;
  top:7%;
  display:inline-block;
  width:300px;
}
.text-wrapper2{
  display:inline-block;
  width:150px;
  font-size:16px;
  font-weight:500;
}
.naver-price{
  color:#FF1744;
  font-size:17px;
  font-weight:600;
  display:inline-block;
}
.other{
  position:relative;
  float:right;
  text-align: end;
  top:10%;
  right:5%;
  font-size:14px;
}
</style>