<template>
  <div class="product-container">
    <img
      class="product-image"
      src="https://i.ebayimg.com/images/g/A5UAAOSwK39hi5H1/s-l300.jpg"
      width="180"
      height="180"
    >
    <span class="product-info py-2">
      <div>Canon Cemra EOS 200D, Black 10x zoom</div>
      <div class="py-2">
        <span style="font-size:15px;">87,000원</span>
        <div class="naver-price">네이버 최저가 : 103,000원</div>
      </div>
      <div class="rating-review">
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
        <div class="rating-num">3.0</div>
        <div class="v-line3" />
        <span class="img-message py-2">
          <v-img
            src="@/assets/message.png"
            width="20px"
            height="20px"
          />
        </span>
        <span class="py-2">리뷰 : 35개</span>
      </div>
      <div>
        조회수 : 401,222
      </div>
    </span>

    
    <div class="shopping-mall1 px-4">
      <v-img
        src="@/assets/Amazon.png"
        width="50"
      />
    </div>
    <div>
      <v-btn
        class="like-btn-wrapper1"
      >
        <span
          class="px-12"
          style="font-size:14px; font-weight:600;"
        >
          구매하러가기
        </span>
      </v-btn>
    
      <v-btn
        class="like-btn-wrapper2"
      >
        <span
          class="px-12"
          style="font-size:14px; font-weight:600;"
        >찜 목록에서 삭제</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rating: 3,
    }
  },
}
</script>

<style scoped>
.product-container {
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 950px;
  height: 200px;
  border: 1px solid;
  border-width:1px;
  border-color:#FCE4EC;
  border-radius: 8px;
  background-color:white;
}
.origin-price{
  padding-left:3px;
  color:#757575;
  text-decoration-line: line-through;
  font-size:12px;
}
.v-line3{
  margin-top:10px;
  padding-right:10px;
  border-left: solid;
  border-width:1px;
  border-color:#E0E0E0;
  height:20px;
}
.naver-price{
  color:#F4511E;
  font-size:14px;
}
.rating-num{
  position:relative;
  color:#FFCA28;
  font-weight:500;
  margin-top:1%;
  left:-2%;
}
.rating-review{
  display: flex;
  position:relative;
  top:-8%;
  left:-5%;
}
.product-image {
  vertical-align:middle;
}
.product-info {
  padding-left: 30px;
  width: 500px;
}
.shopping-mall1 {
  width: 80px;
  display:inline-block;
  left:50%;
}
.like-btn-wrapper1{
  position: relative;
  top:40%;
  left:40%;
  width:140px;
  height:40px;
  background-color:#A1887F;
  color:white;
}
.like-btn-wrapper2{
  position: relative;
  left:40%;
  top:45%;
  width:140px;
  height:40px;
  background-color:white;
  color:black;
}
</style>