<template>
  <div class="product-wrapper pa-12">
    <div class="img-wrapper1">
      <v-img src="@/assets/proExample.png" />
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
      
      <span class="mx-5 py-3"> {{ price }}원 </span>
      <span class="originPrice"> {{ naverPrice }}원 </span>
      <span class="px-5 discountRate"> {{ discountRate }}% </span>
      <div class="px-5">
        네이버 최저가: {{ naverPrice }}원
      </div>
      <div class="px-5">
        카테고리:  {{ category }}
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
import axios from 'axios'
export default {
  name: 'ProductInfo',
  data() {
    return {
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
    axios.get('http://localhost:8080/api/product/detail?name=' + this.$route.query.name)
    .then((res) => {
      this.name = res.data['result']['name']
      this.price = res.data['result']['price'],
      this.naverPrice = res.data['result']['naverPrice']
      this.category = res.data['result']['categoryName']
    })
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