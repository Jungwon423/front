<template>
  <div
    class="card-group1 px-3"
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
    <div class="text-group1">
      <div class="product-name">
        {{ name }}
      </div>
      <div class="product-group">
        <span>{{ roundedPrice }}원</span>
      </div>
      <div class="naver-price">
        네이버 최저가: {{ roundedNaverPrice }}
      </div>
    </div>
    <div class="rating-group">
      <v-rating
        v-model="computed_rating"
        value="3.5"
        color="#FFB300"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        half-icon="mdi-star-half"
        half-increments
        readonly
        size="15"
      />
      <span class="px-1 rating-num2">
        {{ computed_rating }}
      </span>
      <div class="py-3 review-group">
        <span>
          <v-img
            src="@/assets/message.png"
            width="20px"
            height="20px"
          />
        </span>
        <span>댓글 : {{ comment }}개</span>
        <div
          v-if="empty"
          class="heart-box"
        >
          <v-icon
            icon="mdi-heart-outline"
            color="#A1887F"
            size="large"
            class="heart-icon"
            @click.stop="changeBtn()"
          />
        </div>
        <div
          v-if="!empty"
          class="heart-box"
        >
          <v-icon
            icon="mdi-heart"
            color="#A1887F"
            size="large"
            class="heart-icon"
            @click.stop="changeBtn()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import jwtAxios from '@/library/jwtAxios';

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
      empty: true,
    }
  },
  computed: {
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
      jwtAxios.post('/product/wishlist?productId=' + encodeURIComponent(this.name), { wish: this.empty ? "wish" : "unwish"})

      this.empty = !this.empty;
    },
    goProduct() {
      jwtAxios.post('/product/click?productId=' + encodeURIComponent(this.name))
      .then((res) => {
      })

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
  width: 300px;
  height: 500px;
  display: block;
  position: relative;
  cursor: pointer;
}
.card-img{
  width:300px;
  position:relative;
  margin-left:10%;
}
.text-group1{
  width: 300px;
  height: auto;
  margin-left:3%;
}
.product-name{
  height:100px;
}
.product-group{
  margin-top:10px;
}
.originPrice-group{
  position:relative;
  font-size: 12px;
  text-decoration: line-through;
}
.naver-price{
  color:#F4511E;
  font-size:14px;
}
.rating-group{
  position:relative;
  left:3%;
}
.rating-num2{
  position:relative;
  color:#FFB300;
  font-weight:500;
}
.review-group{
  display:flex;
}
.heart-box{
  position:relative;
  margin-top:-10px;
  margin-left:130px;
  display:flex;
  vertical-align: middle;
  border-style:solid;
  border-width:1px;
  border-color:#BDBDBD;
  border-radius:7px;
  width:40px;
  height:40px;
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
  left:13%;
  top:13%;
}
</style>
