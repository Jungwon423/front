<template>
  <div
    class="product-container"
    @click="goProduct"
  >
    <img
      class="product-image"
      :src="imageUrl"
      width="180"
      height="180"
    >
    <span class="product-info py-2">
      <div> {{ name }}</div>
      <div class="py-2">
        <span style="font-size:15px;">{{ roundedPrice }}원</span>
        <div class="naver-price">네이버 최저가 : {{ roundedNaverPrice }} 원</div>
      </div>
      <div class="rating-review">
        <v-rating
          v-model="computed_rating"
          class="px-5"
          color="#FFB300"
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-star-half"
          half-increments
          readonly
          size="15"
        />
        <div class="rating-num"> {{ rating }}</div>
      </div></span>
  
    <div class="shopping-mall py-4">
      <v-img
        :src="market_image"
        width="50"
      />
      <div class="shopping-mall-text">
        {{ marketName }}
      </div>
    </div>
  </div>
</template>
  
<script>
import jwtAxios from '@/library/jwtAxios'
import PleaseLoginDialog from '../ProductPage/PleaseLoginDialog.vue'

export default {
components: {
    //PleaseLoginDialog
},
props: {
    imageUrl: {
    type: String,
    default: ''
    },
    name: {
    type: String,
    default: ''
    },
    price: {
    type: Number,
    default: -1
    },
    naverPrice: {
    type: Number,
    default: -1
    },
    rating: {
    type: Number,
    default: 0
    },
    marketName: {
    type: String,
    default: ''
    },
},
data() {
    return {
    wishChecked: false,
    loginDialog: false,
    }
},
computed: {
    computed_rating: function () {
    return this.rating
    },
    market_image: function () {
    return require("@/assets/" + this.marketName + ".png")
    },
    roundedPrice: function() {
    return Math.floor(this.price).toLocaleString('ko-KR')
    },
    roundedNaverPrice: function () {
    return Math.floor(this.naverPrice).toLocaleString('ko-KR')
    },
},
methods:{
    changeBtn(){
    if (this.$store.getters['Login/logined']) {
        jwtAxios.post('/product/wishlist?productId=' + encodeURIComponent(this.name), { wish: !this.wishChecked ? "wish" : "unwish"})
        .then((res) => {
        console.log(res.data)
        this.wishChecked = res.data['checked']
        })
    }
    else {
        this.loginDialog = true
    }
    },
    goProduct() {
    jwtAxios.post('/product/click?productId=' + encodeURIComponent(this.name))

    this.$router.push({
        name: 'product',
        query: {
        name: this.name,
        }},)  
    },
    closeDialog() {
    this.loginDialog = false
    }
}
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
border-color:#E0E0E0;
border-radius: 8px;
cursor: pointer;
}
.naver-price{
color:#F4511E;
font-size:14px;
}
.rating-num{
position:relative;
color:#FFB300;
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
.shopping-mall-text{
font-size:14px;
color:#BDBDBD;
}
.product-image {
vertical-align:middle;
}
.product-info {
    padding-left: 30px;
    width: 500px;
}
.shopping-mall {
    margin-left:130px;
    width: 80px;
}
</style>
  