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
        <span class="py-2">리뷰 : {{ comments.length }}개</span>
      </div>
      
      <span class="mx-5 py-3"> {{ Math.floor(price).toLocaleString('ko-KR') }}원 </span>
      <!-- <span class="originPrice"> {{ Math.floor(naverPrice).toLocaleString('ko-KR') }}원 </span> -->
      <span class="px-5 discountRate"> {{ Math.floor(discountRate) }}% </span>
      <div class="px-5">
        네이버 최저가: {{ Math.floor(naverPrice).toLocaleString('ko-KR') }}원
      </div>
      <div class="px-5">
        카테고리:  {{ category }}
      </div>
            

      <div class="ddabong-card pa-4">
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
          
          <please-login-dialog />
        </v-dialog>

        <v-dialog
          v-model="disrecommendDialog"
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
                <span class="ddabong-text">비추천 {{ bad.length }}</span>
              </div>
              <!-- 
              <div class="ddabong pa-1">
                <v-img
                  v-if="!disRecommendChecked"
                  width="20px"
                  height="20px"
                  src="@/assets/thumbs/우우1.png"
                />
                <v-img
                  v-if="disRecommendChecked"
                  src="@/assets/thumbs/비추천.png"
                  v-bind="attrs"
                />
              </div>
              <span class="ddabong-text">비추천 {{ bad.length }}</span>
               -->
            </div>
          </template>
          <please-login-dialog />
        </v-dialog>
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
  components: { PleaseLoginDialog },
  data() {
    return {
      recommendDialog: false,
      disrecommendDialog: false,

      snackbar: false
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
  },
  methods: {
    clickGood() {
      if (this.$store.getters['Login/logined'] && !this.recommendChecked && !this.disrecommendChecked) {
        jwtAxios.post("/product/recommend?productId=" + this.$route.query.name)
        .then((res) => {
          this.good = res.data['users']
          this.goodNumber = res.data['users'].length
          this.recommendChecked = res.data['recommendChecked']
        })
      }
      else if (this.$store.getters['Login/logined']) {
        this.snackbar = true
      }
      else {
        this.recommendDialog = true
      }

      
    },
    clickBad() {
      if (this.$store.getters['Login/logined'] && !this.recommendChecked && !this.disrecommendChecked) {
        jwtAxios.post("/product/disrecommend?productId=" + this.$route.query.name)
        this.empty2 = !this.empty2;
      }
      else if (this.$store.getters['Login/logined']) {
        this.snackbar = true
      }
      else {
        this.disrecommendDialog = true
      }
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
.discountRate{
  font-size:14px;
  font-weight: 600;
  color:#EF5350;
}
.ddabong{
  width:100px;
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
  display:inline-block;
  position:relative;
  width:30px;
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