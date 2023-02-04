<template>
  <div
    class="card-group1 text-center"
    @click="goProduct"
  >
    <div class="card-img">
      <img
        :src="imageUrl"
        alt="img11"
        height="250"
        width="250"
      >
    </div>
    <div class="text-group1 text-start">
      <div class="product-name">
        {{ name }}
      </div>
      <div class="product-group">
        <span>{{ roundedPrice }}원</span>
      </div>
      <div class="naver-price">
        네이버 최저가 : {{ roundedNaverPrice }}
      </div>
    </div>
    <div>
      <div class="star-ratings">
        <div 
          class="star-ratings-fill space-x-2 text-lg"
          :style="{ width: ratingToPercent + '%' }"
        >
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <div class="star-ratings-base space-x-2 text-lg">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>
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
</template>
  
<script>
import jwtAxios from '@/jwtAxios';

export default {
  name: 'ProductContainer',

  props: {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
    
    currency: {
      type: String,
      required: true
    },

    discountRate: {
      type: Number,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    categoryName: {
      type: String,
      required: true
    },

    marketName: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      required: true,
    },
    
    // tax: {
    //   type: Number,
    //   required: true
    // },

    // shippingFee: {
    //   type: Number,
    //   required: true
    // },

    clickCount: {
      type: Number,
      required: true
    },

    locale: {
      type: String,
      required: true,
    },

    naverPrice: {
      type: Number,
      required: true
    },

    rating: {
      type: Number,
      default: 0
    },
    
    comment: {
      type: Number,
      default: 0
    },
  },
  data () {
    return {
      rating1:4.5,
      empty: true,
      fill: false,
    }
  },
  computed: {
    ratingToPercent() {
      const score = +this.rating1 * 20;
      return score;
    },
    roundedPrice: function() {
      return Math.floor(this.price).toLocaleString('ko-KR')
    },
    roundedNaverPrice: function () {
      return Math.floor(this.naverPrice).toLocaleString('ko-KR')
    },
    computed_rating: function () {
      return this.rating
    },
  },
  methods:{
    changeBtn(){
      jwtAxios.post('/product/' + this.name + '/wishlist')

      this.empty = !this.empty;
      this.fill = !this.fill;
    },
    goProduct() {
      jwtAxios.post('/product/' + this.name + '/wishlist')

      this.$router.push({
        name: 'product',
        query: {
          name: this.name,
        }},)  
    },
  }
}
</script>

<style scoped>
.card-group1{
  width:480px;
  display: inline-block;
  position: relative;
  cursor: pointer;
}
.card-img{
  margin-top:100px;
  display: inline-block;
  position:relative;
  margin-left:10%;
}
.text-group1{
  display: inline-block;
  font-size:30px;
  width: 400px;
  height: 100px;
  margin-left:6%;
}
.product-name{
  height:80px;
  white-space:normal;
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow:ellipsis;
}
.product-group{
  text-align: left;
  display: inline-block;
  margin-top:10px;
  font-size:35px;
  font-weight: 600;
}
.naver-price{
  display: inline-block;
  color:#F4511E;
  font-size:30px;
}
.heart-box{
  position:relative;
  bottom:70px;
  left:150px;
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
.star-ratings {
  font-size:50px;
  color: #aaa9a9; 
  position: relative;
  left:10%;
  width: max-content;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1.3px;
}
.star-ratings-fill {
  color: #FFB300;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: #FFB300;
}
 
.star-ratings-base {
  z-index: 0;
  padding: 0;
  -webkit-text-fill-color: white;
}
</style>
