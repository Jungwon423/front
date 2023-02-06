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
        <span class="py-2">리뷰 : {{ comment.length }}개</span>
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
        <v-dialog
          v-model="recommendDialog"
          max-width="500px"
          height="500px"
        >
          <template #activator="{ attrs }">
            <div
              class="ddabong-card1 text-center"
              v-bind="attrs"
              @click="clickGood"
            >
              <div class="ddabong pa-1">
                <v-img
                  v-if="!empty1"
                  width="20px"
                  height="20px"
                  src="@/assets/thumbs/따봉1.png"
                />
                <v-img
                  v-if="empty1"                
                  src="@/assets/thumbs/추천.png"
                  v-bind="attrs"
                />
              </div>
              <span class="ddabong-text">추천 {{ good.length }}</span>
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
            <div
              class="ddabong-card2 text-center"
              v-bind="attrs"
              
              @click="clickBad"
            >
              <div class="ddabong pa-1">
                <v-img
                  v-if="!empty2"
                  width="20px"
                  height="20px"
                  src="@/assets/thumbs/우우1.png"
                />
                <v-img
                  v-if="empty2"
                  src="@/assets/thumbs/비추천.png"
                  v-bind="attrs"
                />
              </div>
              <span class="ddabong-text">비추천 {{ bad.length }}</span>
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
      imageUrl: "",
      name: "",
      rating: 0,
      comment: [],
      price: 0,
      naverPrice: 0,
      category: "생활/건강",
      market: "",
      link: "",
      tax: 0,
      shippingFee: 0,
      clickCount: 0,
      goodNumber: 0,
      good: [],
      badNumber: 0,
      bad: [],
      wishUserList: [],
      subImageUrl: [],
      recommendDialog: false,
      disrecommendDialog: false,

      empty1: false,
      empty2: false,
    };
  },
  computed: {
    discountRate: function () {
        return (1 - this.price / this.naverPrice) * 100;
    },
  },
  async created() {
    jwtAxios.get("/product/detail?name=" + this.$route.query.name)
      .then((res) => {
      this.imageUrl = res.data["result"]["imageUrl"];
      this.name = res.data["result"]["name"];
      this.rating = res.data["result"]["rating"];
      // this.comment = res.data['result']['comment']
      this.price = res.data["result"]["price"],
      this.naverPrice = res.data["result"]["naverPrice"];
      this.category = res.data["result"]["categoryName"];
      this.market = res.data["result"]["marketName"];
      this.link = res.data["result"]["link"];
      this.tax = res.data["result"]["tax"];
      this.shippingFee = res.data["result"]["shippingFee"];
      this.clickCount = res.data["result"]["clickCount"],
      this.goodNumber = res.data["result"]["good"].length;
      this.good = res.data["result"]["good"];
      this.badNumber = res.data["result"]["bad"].length;
      this.bad = res.data["result"]["bad"];
      this.wishUserList = res.data["result"]["wishUserList"];
      this.subImageUrl = res.data["result"]["subImageUrl"];
    });
  },
  methods: {
    clickGood() {
      if (this.$store.getters['Login/logined']) {
        jwtAxios.post("/product/" + this.$route.query.name + "/recommend")

        // this.good += this.empty1 ? 1 : 0
        this.goodNumber += 1

        this.empty1 = !this.empty1;

      }
      else {
        this.recommendDialog = true
      }

      
    },
    clickBad() {
      if (this.$store.getters['Login/logined']) {
        jwtAxios.post("/product/" + this.$route.query.name + "/disrecommend")
        this.empty2 = !this.empty2;
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