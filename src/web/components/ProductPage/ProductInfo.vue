<template>
  <div class="product-wrapper pa-12">
    <div class="img-wrapper1">
      <v-img src="@/assets/proExample.png" />
    </div>
    <div class="product-description1 pa-8">
      <div class="text-group2 px-5">
        <span>셔츠를 보니까 그냥 옷 핏이 사네요 개쩌는 제품입니다 아아아아아</span>
      </div>
      <div class="text-group3">
        <v-rating
          v-model="rating"
          class="px-5"
          value="3.5"
          color="#FFB300"
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-star-half"
          half-increments
          readonly
          size="15"
        />
        <span class="text-group4 py-2">3.5</span>
        <span class="v-line2" />
        <span class="img-message py-2">
          <v-img
            src="@/assets/message.png"
            width="20px"
            height="20px"
          />
        </span>
        <span class="py-2">추천수 : 35개</span>
      </div>
      
      <span class="mx-5 py-3"> 6500원 </span>
      <span class="originPrice"> 12000원 </span>
      <span class="px-5 discountPrice"> 24% </span>
      <div class="px-5">
        네이버 최저가: 190000원
      </div>
      <div class="px-5">
        카테고리:  shirt
      </div>

      <div class="ddabong-card pa-4">
        <div class="ddabong-card1 text-center">
          <div class="ddabong">
            <v-img src="@/assets/개추.png" />
          </div>
          <span class="ddabong-text">추천 7개</span>
        </div>
        <div class="ddabong-card2 text-center">
          <div class="ddabong">
            <v-img src="@/assets/비추.png" />
          </div>
          <span>비추천 0개</span>
        </div>
      </div>
      <hr class="h-line1">
    </div>
  </div>
</template>
<script>
export default {
    name: 'ProductInfo',
    data() {
    return {
      rating: 3
    }
  }
}
</script>
<style scoped>
.product-wrapper{
    display:flex;
    width:980px;
}
.img-wrapper1{
    display:flex;
    width:300px;
}
.product-description1{
    width:600px;
}
.text-group2{
    font-size:20px;
    font-weight: 600;
}
.text-group4{
    position:relative;
    left:-2%;
}
.img-message{
    position:relative;
    margin-left:10px;
}
.text-group3{
    display:flex;
    align-self:center;
}
.v-line2{
    margin-top:10px;
    border-left: solid;
    border-width:1px;
    border-color:#E0E0E0;
    height:20px;
}
.h-line1{
    margin-top:50px;
    border-left: solid;
    border-width:0.5px;
    border-color:#E0E0E0;
    width:500px;
}
.originPrice{
    font-size:11px;
    text-decoration-line: line-through;
}
.discountPrice{
    font-size:14px;
    font-weight: 600;
    color:#EF5350;
}
.ddabong{
    display: inline-block;
    width:50px;
} 
.ddabong-card{
    width:500px;
}
.ddabong-card1{
    display:inline-block;
    border-style:solid;
    border-width: 1px 0px 1px 1px;
    border-color:black;
    width:150px;
    height:70px;
    align-self: center;
}
.ddabong-card2{
    display:inline-block;
    border-style:solid;
    border-width: 1px;
    border-color:black;
    width:150px;
    height:70px;
    align-self: center;
}
</style>