<template>
  <div class="product-wrapper pa-12">
    <div class="img-wrapper1">
      <v-img :src="imageUrl" />
    </div>
    <div class="product-description1 pa-8">
      <div class="text-group2 px-5">
        <span>{{ name }}</span>
      </div>
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
          size="15"
        />
        <span class="text-group4 py-2"> {{ rating }}</span>
        <span class="v-line2" />
        <span class="img-message py-2">
          <v-img
            src="@/assets/message.png"
            width="20px"
            height="20px"
          />
        </span>
        <span class="py-2">리뷰 : {{ comment }}개</span>
      </div>
      
      <span class="mx-5 py-3"> {{ Math.floor(price).toLocaleString('ko-KR') }}원 </span>
      <span class="originPrice"> {{ Math.floor(naverPrice).toLocaleString('ko-KR') }}원 </span>
      <span class="px-5 discountRate"> {{ Math.floor(discountRate) }}% </span>
      <div class="px-5">
        네이버 최저가: {{ Math.floor(naverPrice).toLocaleString('ko-KR') }}원
      </div>
      <div class="px-5">
        카테고리:  {{ category }}
      </div>

      <div class="ddabong-card pa-4">
        <div
          class="ddabong-card1 text-center"
          @click="clickGood"
        >
          <div class="ddabong pa-1">
            <v-img
              width="20px"
              height="20px"
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
              width="20px"
              height="20px"
              src="@/assets/thumbs/우우1.png"
            />
          </div>
          <span class="ddabong-text">비추 {{ bad }}</span>
        </div>
      </div>
      <hr class="h-line1">
    </div>
  </div>
</template>

<script>
import jwtAxios from '@/jwtAxios'

export default {
  name: 'ProductInfo',
  data() {
    return {
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
  position:relative;
  left:-4%;
  font-size:11px;
  text-decoration-line: line-through;
}
.discountRate{
  font-size:14px;
  font-weight: 600;
  color:#EF5350;
}
.ddabong{
  width:50px;
  position: relative;
  top:10%;
  left:10%;
} 
.ddabong-text{
  position:relative;
  bottom:60%;
  left:13%;
  font-size:12px;
}
.ddabong-card{
  width:500px;
}
.ddabong-card1{
  display:inline-block;
  border-style:solid;
  border-radius:6px;
  border-width:2px;
  border-color:#757575;
  width:90px;
  height:40px;
  align-self: center;
  cursor:pointer;
  transition:all 0.9s, color 0.3;  
}
.ddabong-card2{
  display:inline-block;
  border-style:solid;
  position:relative;
  left:4%;
  border-radius:6px;
  border-width:2px;
  border-color:#757575;
  width:90px;
  height:40px;
  align-self: center;
  cursor:pointer;
}
.ddabong-card1:hover{
  box-shadow:200px 0 0 0 rgba(0,0,0,0.3) inset;
}
.ddabong-card2:hover{
  box-shadow:200px 0 0 0 rgba(0,0,0,0.3) inset;
}
.ddabong-card1:active{
  background-color: #757575;
}
.ddabong-card2:active{
  background-color: #757575;
}
</style>