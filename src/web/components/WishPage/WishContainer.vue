<template>
  <div class="product-container">
    <img
      class="product-image"
      :src="imageUrl"
      width="180"
      height="180"
    >
    <span class="product-info py-2">
      <div> {{ name }} </div>
      <div class="py-2">
        <span style="font-size:15px;">{{ Math.floor(price).toLocaleString('ko-KR') }}원</span>
        <div class="naver-price">네이버 최저가 : {{ Math.floor(naverPrice).toLocaleString('ko-KR') }}원
        </div>
        <div class="rating-review">
          <v-rating
            class="px-5"
            :value="rating"
            color="#FFB300"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half"
            half-increments
            readonly
            size="15"
          />
          <div class="rating-num">{{ rating }}</div>
          <div class="v-line3" />
          <span class="img-message py-2">
            <v-img
              src="@/assets/message.png"
              width="20px"
              height="20px"
            />
          </span>
          <span class="py-2">리뷰 : {{ commentCount }}개</span>
        </div>
        <div>
          조회수 : {{ clickCount }}
        </div>
      </div></span>

    
    <div class="shopping-mall1 px-4">
      <v-img
        src="@/assets/Amazon.png"
        width="50"
      />
    </div>
    <div>
      <v-btn
        class="like-btn-wrapper1"
        @click="openMarket"
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
        @click="deleteWish"
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
import jwtAxios from '@/library/jwtAxios'
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    imageUrl: {
      type: String,
      default: ''
    },
    marketName: {
      type: String,
      default: ''
    },
    clickCount: {
      type: Number,
      default: 0
    },
    naverPrice: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0
    },
    commentCount: {
      type: Number,
      default: 0
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    openMarket() {
      window.open(this.link)
    },
    deleteWish() {
      console.log('/product/wishlist?productId=' + encodeURIComponent(this.name), { wish: "unwish"})
      jwtAxios.post('/product/wishlist?productId=' + encodeURIComponent(this.name),
      { wish: "unwish"})
      .then((res) => {
        console.log(res.data['wishList'])
        this.$store.commit('Wish/SET_WISHLIST', res.data["wishList"]) 
      })
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