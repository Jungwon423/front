<template>
  <div
    class="px-5"
    style="font-size:35px; font-weight:600"
  >
    홈 >  {{ category }}
  </div>
  <div class="img-wrapper1">
    <v-img :src="imageUrl" />
  </div>
  <div class="product-wrapper">
    <div class="product-description1">
      <div class="text-group2 px-5">
        <span>{{ name }}</span>
      </div>
      <div class="texts">
        <div class="text-group3">
          <v-rating
            v-model="rating"
            class="px-5"
            color="#FFB300"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half"
            half-increments
            readonly
            size="50"
          />
          <span class="text-group4 py-2"> {{ rating }}</span>
          <span class="v-line2" />
          <span class="img-message py-2">
            <v-img
              src="@/assets/message.png"
              width="50px"
              height="50px"
            />
          </span>
          <span class="px-5 py-2">리뷰 : {{ comment }}개</span>
        </div>
      
        <span class="mx-5 py-3"> {{ Math.floor(price).toLocaleString('ko-KR') }}원 </span>
        <div class="naver-price px-5">
          네이버 최저가: {{ Math.floor(naverPrice).toLocaleString('ko-KR') }}원
        </div>
      </div>

      <div class="ddabong-card pa-4">
        <div
          class="ddabong-card1 text-center"
          @click="clickGood"
        >
          <div class="ddabong pa-1">
            <v-img
              width="60px"
              height="60px"
              src="@/assets/thumbs/따봉1.png"
            />
          </div>
          <span class="ddabong-text">추천 {{ good }}</span>
        </div>
        <div
          class="ddabong-card2 text-center"
          @click="clickBad"
        >
          <div class="ddabong pa-1">
            <v-img
              width="60px"
              height="60px"
              src="@/assets/thumbs/우우1.png"
            />
          </div>
          <span class="ddabong-text">비추 {{ bad }}</span>
        </div>
        <div
          v-if="empty"
          class="heart-box"
        >
          <v-img
            width="80"
            height="80"
            src="@/assets/mdi/heart-outline-custom.png"
            class="heart-icon"
            @click.stop="changeBtn()"
          />
        </div>
        <div
          v-if="fill"
          class="heart-box"
        >
          <v-img
            width="80"
            height="80"
            src="@/assets/mdi/heart-custom.png"
            class="heart-icon"
            @click.stop="changeBtn()"
          />
        </div>
      </div>
      <hr class="h-line1">
    </div>
  </div>
</template>

<script>
import jwtAxios from '@/library/jwtAxios'

export default {
  name: 'ProductInfo',
  data() {
    return {
      rating1:4.5,
      empty: true,
      fill: false,
      imageUrl: '',
      name: '',
      rating: 0,
      comment: 0,
      price: 0,
      naverPrice: 0,
      category: '생활/건강',
      good: 0,
      bad: 0,
    }
  },
  computed: {
    discountRate: function() {
      return (1-this.price/this.naverPrice)*100
    }
  },
  async created() {
    jwtAxios.get('/product/detail?name=' + this.$route.query.name)
    .then((res) => {
      this.imageUrl = res.data['result']['imageUrl']
      this.name = res.data['result']['name']
      this.price = res.data['result']['price'],
      this.naverPrice = res.data['result']['naverPrice']
      this.category = res.data['result']['categoryName']
    })
  },
  methods: {
    clickGood() {
      jwtAxios.post('/product/' + this.$route.query.name + '/recommend', { recommend: "good"})
      .then((res) => {})
    },
    clickbad() {
      jwtAxios.post('/product/' + this.$route.query.name + 'recommend', { recommend: "bad" } )
      .then((res) => {})
    },
    changeBtn(){
      jwtAxios.post('/product/' + this.name + '/wishlist')

      this.empty = !this.empty;
      this.fill = !this.fill;
    },
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
  width:100%;
}
.product-description1{
  width:980px;
}
.text-group2{
  font-size:40px;
  font-weight: 600;
}
.text-group4{
  font-size:35px;
  position:relative;
  color:#FFB300;
}
.img-message{
  position:relative;
  margin-left:10px;
}
.text-group3{
  font-size:40px;
  display:flex;
  align-self:center;
}
.texts{
  font-size:40px;
}
.v-line2{
  margin-top:10px;
  margin-left:40px;
  border-left: solid;
  border-width:5px;
  border-color:#E0E0E0;
  height:50px;
}
.naver-price{
  font-size:40px;
  font-weight: 600;
  color:#EF5350;
}
.ddabong{
  width:200px;
  position: relative;
  top:10%;
  left:10%;
} 
.ddabong-text{
  position:relative;
  bottom:45%;
  left:14%;
  font-size:31px;
}
.ddabong-card{
  width:900px;
}
.ddabong-card1{
  display:inline-block;
  border-style:solid;
  border-radius:6px;
  border-width:2px;
  border-color:#757575;
  width:200px;
  height:100px;
  align-self: center;
  cursor:pointer;
}
.ddabong-card2{
  display:inline-block;
  border-style:solid;
  position:relative;
  left:4%;
  border-radius:6px;
  border-width:2px;
  border-color:#757575;
  width:200px;
  height:100px;
  align-self: center;
  cursor:pointer;
}
.ddabong-card1:active{
  background-color: #757575;
}
.ddabong-card2:active{
  background-color: #757575;
}
.heart-box{
  position:relative;
  bottom:70px;
  left:350px;
  display:inline-block;
  vertical-align: middle;
  width:100px;
  height:100px;
  color: #000;
  background-color: #fff;
  box-shadow: 0px 8px 15px white;
  cursor: pointer;
}
.heart-box:hover {
  background-color: #EEEEEE;
  box-shadow: 0px 2px 2px #E0E0E0;
}
.heart-icon{
  position:relative;
  top:6%;
  left:10%;
}
</style>