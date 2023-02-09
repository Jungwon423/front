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
        <div class="v-line3" />
        <span class="img-message py-2">
          <v-img
            src="@/assets/message.png"
            width="20px"
            height="20px"
          />
        </span>
        <span class="py-2"> 댓글 : {{ comment }}개</span>
      </div>
      <div class="view">
        조회수 : {{ clickCount }}
      </div>
    </span>

    <div class="shopping-mall py-4">
      <v-img
        :src="market_image"
        width="50"
      />
      <div class="shopping-mall-text">
        {{ marketName }}
      </div>
    </div>
    <div class="community-info">
      <v-dialog
        v-model="loginDialog"
        max-width="500px"
        height="500px"
      >
        <template #activator="{ attrs }">
          <div
            v-if="!wishChecked"
            class="heart-box"
            v-bind="attrs"
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
            v-if="wishChecked"
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
        </template>
        <please-login-dialog
          @close="closeDialog"
        />
      </v-dialog>
      
      <div class="recommend">
        <div class="recommend-text">
          추천 {{ good }}
        </div>
        <div class="recommend-text">
          비추천 {{ bad }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwtAxios from '@/library/jwtAxios'
import PleaseLoginDialog from '../ProductPage/PleaseLoginDialog.vue'

export default {
  components: {
    PleaseLoginDialog
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
    comment: {
      type: Number,
      default: 0
    },
    clickCount:{
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
    checked: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      wishChecked: this.checked,
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
  height: 220px;
  border: 1px solid;
  border-width:1px;
  border-color:#E0E0E0;
  border-radius: 8px;
  cursor: pointer;
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
.view{
  position:relative;
  bottom:12%;
}
.shopping-mall-text{
  font-size:14px;
  color:#BDBDBD;
}
.recommend{
  margin-top:60px;
}
.recommend-text{
  font-size:15px;
  font-weight:600;
  text-align: end;
}
.product-image {
  vertical-align:middle;
}
.product-info {
  padding-left: 30px;
  width: 500px;
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
.heart-box:hover {
  background-color: #EEEEEE;
  box-shadow: 0px 2px 2px #E0E0E0;
}
.heart-icon{
  position:relative;
  left:13%;
  top:13%;
}
.shopping-mall {
  width: 80px;
}
.community-info {
  width: 100px;
}
</style>
