<template>
  <div class="product-category">
    홈 &nbsp;> &nbsp;{{ category }}
  </div>
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
        <span class="py-2">리뷰 : {{ comments.length }}개</span>
        <div class="ddabong-card">
          <v-dialog
            v-model="recommendDialog"
            max-width="500px"
            height="500px"
          >
            <template #activator="{ attrs }">
              <v-snackbar
                v-model="snackbar"
                :timeout="2000"
              >
                이미 추천/비추천을 한 제품입니다.
              </v-snackbar>
              <div
                class="ddabong-card1 text-center"
                v-bind="attrs"
                @click="clickGood"
              >
                <div class="ddabong pa-1">
                  <div class="ddabong-img1">
                    <v-img
                      v-if="!recommendChecked"
                      width="25px"
                      height="25px"             
                      src="@/assets/thumbs/추천.png"
                    />
                  </div>
                  <div class="ddabong-img2">
                    <v-img
                      v-if="recommendChecked"   
                      width="20px"
                      height="20px"
                      src="@/assets/thumbs/따봉1.png"
                      v-bind="attrs"
                    />
                  </div>
                  <span class="ddabong-text">추천 {{ good.length }}</span>
                </div>
              </div>
            </template>
          
            <please-login-dialog
              @close="closeRecommendDialog"
            />
          </v-dialog>

          <v-dialog
            v-model="disRecommendDialog"
            max-width="500px"
            height="500px"
          >
            <template #activator="{ attrs }">
              <v-snackbar
                v-model="snackbar"
                :timeout="2000"
              >
                이미 추천/비추천을 한 제품입니다.
              </v-snackbar>
              <div
                class="ddabong-card2 text-center"
                v-bind="attrs"
              
                @click="clickBad"
              >
                <div class="ddabong pa-1">
                  <div class="ddabong-img1">
                    <v-img
                      v-if="!disRecommendChecked"
                      width="25px"
                      height="25px"             
                      src="@/assets/thumbs/비추천.png"
                    />
                  </div>
                  <div class="ddabong-img2">
                    <v-img
                      v-if="disRecommendChecked"   
                      width="20px"
                      height="20px"
                      src="@/assets/thumbs/우우1.png"
                      v-bind="attrs"
                    />
                  </div>
                  <span class="ddabong-text">비추 {{ bad.length }}</span>
                </div>
              </div>
            </template>
            <please-login-dialog
              @close="closeDisRecommendDialog"
            />
          </v-dialog>
        </div>
      </div>
      
      <span class="mx-5 py-3"> {{ Math.floor(price).toLocaleString('ko-KR') }}원 </span>
      <!-- <span class="originPrice"> {{ Math.floor(naverPrice).toLocaleString('ko-KR') }}원 </span> -->
      <span class="px-5 discountRate"> {{ Math.floor(discountRate) }}% </span>
      <div class="px-5">
        <span>네이버 최저가: {{ Math.floor(naverPrice).toLocaleString('ko-KR') }}원</span>
        <v-btn
          class="brand2-btn-wrapper"
        >
          <v-img
            src="@/assets/네이버로고.png"
            class="brand-btn"
          />
          <span
            class="px-10"
            style="font-weight:600;"
          > 쇼핑</span>
        </v-btn>
      </div>
      <div class="px-5">
        {{ marketName }}
      </div>
      
    
      <div style="display:flex; margin-top: 30px;">
        <v-dialog
          v-model="wishlistDialog"
          max-width="500px"
          height="500px"
        >
          <template #activator="{ attrs }">
            <v-snackbar
              v-model="snackbar"
              :timeout="2000"
            >
              이미 찜한 제품입니다.
            </v-snackbar>
            <div
              class="buy-btn1"
              @click="addWishlist"
            >
              <v-row>
                <v-col>
                  <div class="buy-text1">
                    찜하기
                  </div>
                </v-col>
          
                <v-col>
                  <div
                    v-if="!wishChecked"
                    class="heart-box"
                  >
                    <v-icon
                      icon="mdi-heart-outline"
                      color="#A1887F"
                      size="large"
                      class="heart-icon"
                    />
                  <!-- @click.stop="changeBtn()" -->
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
                      v-bind="attrs"
                    />
                  </div>
                </v-col>
              </v-row>
            </div>
          </template>
          <please-login-dialog
            @close="closeWishlistDialog"
          />
        </v-dialog>

        <div class="buy-btn2">
          <div
            class="buy-text2"
            @click="openMarket"
          >
            바로구매 >
          </div>
        </div>
      </div>
      <hr class="h-line1">
    </div>
  </div>
</template>

<script>
import jwtAxios from '@/library/jwtAxios'
import PleaseLoginDialog from '@/web/components/ProductPage/PleaseLoginDialog.vue'

export default {
  name: "ProductInfo",
  components: {
    PleaseLoginDialog
  },
  data() {
    return {
      recommendDialog: false,
      disRecommendDialog: false,
      wishlistDialog:false,
      wishChecked: false,
      snackbar: false,
    };
  },
  computed: {
    imageUrl: function() {
      return this.$store.state.Product.imageUrl
    },
    name: function() {
      return this.$store.state.Product.name
    },
    rating: function() {
      return this.$store.state.Product.rating
    },
    comments: function() {
      return this.$store.state.Product.comments
    },
    price: function() {
      return this.$store.state.Product.price
    },
    naverPrice: function() {
      return this.$store.state.Product.naverPrice
    },
    category: function() {
      return this.$store.state.Product.category
    },
    marketName: function() {
      return this.$store.state.Product.marketName
    },
    link: function() {
      return this.$store.state.Product.link
    },
    tax: function() {
      return this.$store.state.Product.tax
    },
    shippingFee: function() {
      return this.$store.state.Product.shippingFee
    },
    clickCount: function() {
      return this.$store.state.Product.clickCount
    },
    good: function() {
      return this.$store.state.Product.good
    },
    bad: function() {
      return this.$store.state.Product.bad
    },
    wishUserList: function() {
      return this.$store.state.Product.wishUserList
    },
    recommendChecked: function() {
      return this.good.includes(this.$store.state.Login.id)
    },
    disRecommendChecked: function() {
      return this.bad.includes(this.$store.state.Login.id)
    },
    discountRate: function () {
      return (1 - this.price / this.naverPrice) * 100;
    },
    market_image: function () {
      return require("@/assets/" + this.marketName + ".png")
    },
  },
  methods: {
    clickGood() {
      if (this.$store.getters['Login/logined'] && !this.recommendChecked && !this.disrecommendChecked) {
        jwtAxios.post("/product/recommend?productId=" + encodeURIComponent(this.$route.query.name))
        .then((res) => {
          this.$store.commit('Product/SET_GOOD', res.data['users'])
        })
      }
      else if (this.$store.getters['Login/logined']) {
        this.snackbar = true
      }
      else {
        this.recommendDialog = true
      }
    },
    scrollTop(){
      window.scrollTo(0, 0);
    },
    clickBad() {
      if (this.$store.getters['Login/logined'] && !this.recommendChecked && !this.disrecommendChecked) {
        jwtAxios.post("/product/disrecommend?productId=" + encodeURIComponent(this.$route.query.name))
        .then((res) => {
          this.$store.commit('Product/SET_BAD', res.data['users'])
        })
      }
      else if (this.$store.getters['Login/logined']) {
        this.snackbar = true
      }
      else {
        this.disRecommendDialog = true
      }
    },
    addWishlist(){
      if (this.$store.getters['Login/logined']) {
        jwtAxios.post("/product/wishlist?productId=" + encodeURIComponent(this.$route.query.name))
        .then((res) => {
          this.$store.commit('Product/SET_WISHUSERLIST', res.data['users'])
          this.wishChecked = res.data['checked']
        })
      }
      else {
        this.wishlistDialog = true
      }
    },

    openMarket() {
      window.open(this.link)
    },

    closeRecommendDialog() {
      this.recommendDialog = false
    },

    closeDisRecommendDialog() {
      this.disRecommendDialog = false
    },
    closeWishlistDialog() {
      this.wishlistDialog = false
    },

  }
}
</script>
<style scoped>
.product-category{
  font-weight:600;
  padding-left:70px;
  padding-top:20px;
}
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
.discountRate{
  font-size:14px;
  font-weight: 600;
  color:#EF5350;
}
.ddabong{
  width:40px;
  height:30px;
}
.ddabong-img1{
  display:inline-block;
  width:30px;
  position:relative;
}
.ddabong-img2{
  display:inline-block;
  width:30px;
  position:relative;
  right:30%;
  bottom:30%;
}
.ddabong-text{
  right:10%;
  width:40px;
  display:inline-block;
  font-size:10px;
  position:relative;
  bottom:200%;
}
.ddabong-card{
  margin-left:130px;
  position:relative;
  display:flex;
}
.ddabong-card1{
  position:relative;
  left:10%;
  display:inline;
  border-style:solid;
  border-radius:6px;
  border-width:2px;
  border-color:#757575;
  height:40px;
  align-self: center;
  cursor:pointer;
  transition:all 0.9s, color 0.3;  
}
.ddabong-card2{
  position:relative;
  left:14%;
  display:flex;
  border-style:solid;
  border-radius:6px;
  border-width:2px;
  border-color:#757575;
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
.buy-btn1{
  display:block;
  width:130px;
  height:47px;
  left:28%;
  position:relative;
  border:1px solid #6D4C41;
  cursor: pointer;
  color:#6D4C41;
}
.buy-btn2{
  display:block;
  left:30%;
  width:180px;
  height:47px;
  position:relative;
  background-color:#6D4C41;
  color:white;
  border:1px solid #6D4C41;
  cursor: pointer;
}
.buy-text1{
  position:relative;
  left:25%;
  margin-top:10px;
  font-size:17px;
}
.buy-text2{
  position:relative;
  left:30%;
  margin-top:10px;
  font-size:18px;
}
.buy-btn1:hover{
  box-shadow:200px 0 0 0 rgba(0,0,0,0.3) inset;
}
.buy-btn2:hover{
  box-shadow:200px 0 0 0 rgba(0,0,0,0.3) inset;
}

.brand2-btn-wrapper{
  margin-left:15px;
  height:40px;
  width:70px;
  font-size:12px;
  background-color:#1EC800;
  color:white;
}
.brand-btn{
  position: relative;
  top:10%;
  left:27%;
  width:30px;
  height:30px;
}
.heart-box{
  position:relative;
  top:5%;
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