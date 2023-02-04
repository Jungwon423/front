<template>
  <div
    class="product-container"
    @click="goProduct"
  >
    <img
      class="product-image"
      :src="imageUrl"
      width="300"
      height="350"
    >
    <span class="product-info py-2">
      <div class="product-title"> {{ name }}</div>
      <div class="py-2">
        <span class="product-price">{{ roundedPrice }}원</span>
        <div class="naver-price">네이버 최저가 : {{ roundedNaverPrice }} 원</div>
      </div>
      <div class="rating-review">
        <span
          style="color: #FFB300;"
        >★</span>
        <div class="mx-1"> {{ rating }}/5.0</div>
        <div class="v-line3" />
        <span class="px-5"> 댓글 : {{ comment }}개</span>
        <div class="shopping-mall py-4">
          <v-img
            :src="market_image"
            width="115"
            height="115"
          />
        </div>
      </div>
    </span>
    <!--
    <div class="community-info">
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
        v-if="fill"
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
      -->
  </div>
  <hr class="h-line1">
</template>

<script>
export default {
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
      default: 4.5
    },
    comment: {
      type: Number,
      default: 0
    },
    view: {
      type: Number,
      default: 0
    },
    marketName: {
      type: String,
      default: ''
    },
    good: {
      type: Number,
      default: 0
    },
    bad: {
      type: Number,
      default: 0
    },
  },
  data() {
      return {
        empty: true,
        fill: false,
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
      jwtAxios.post()
      this.empty = !this.empty;
      this.fill = !this.fill;
    },
    goProduct() {
      //jwtAxios.post('/product/' + this.name + '/click')

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
.product-container {
  display: flex;
  width: 980px;
  height: 400px;
  cursor: pointer;
}
.v-line3{
  margin-top:10px;
  margin-left:10px;
  border-left: solid;
  border-width:5px;
  border-color:#E0E0E0;
  height:40px
}
.product-price{
  font-size:40px; 
  font-weight:800;
}
.naver-price{
  color:#F4511E;
  font-size:33px;
  font-weight:500;
}
.rating-review{
  display: flex;
  position:relative;
}
.product-image {
  vertical-align:center;
  margin-top:20px;
  margin-left:40px;
}
.product-title{
  width:600px;
  margin-top:30px;
  font-size:35px;
  font-weight:500;
  white-space:normal;
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow:ellipsis;
}
.product-info {
  padding-left: 30px;
  width: 500px;
  height: 150px;
  font-size:35px;
}
.heart-box{
  position:relative;
  top:5%;
  left:60%;
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
.heart-icon{
  position:relative;
  left:13%;
  top:13%;
}
.shopping-mall {
  width: 120px;
  position:relative;
  left:28%;
}
</style>
