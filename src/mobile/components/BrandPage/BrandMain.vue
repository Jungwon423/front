<template>
  <v-row class="my-4 text-center">
    <v-col cols="12">
      <div style="font-size:65px; font-weight:600;">
        브랜드 기획전
      </div>
      <div
        class="py-4"
        style="font-size:40px; font-weight:400;"
      >
        해외 탑 브랜드의 세일을 알아보세요
      </div>
    </v-col>
  </v-row>
  <v-row
    class="text-center"
    justify="center"
  >
    <v-col
      v-for="product in products"
      :key="product.modelImage"
    >
      <div class="brand-card1">
        <div class="brand-img">
          <v-img :src="product.modelImage" />
        </div>
        <v-img
          height="150px"
          :src="product.brandImage"
        />
        <div class="brand-content">
          {{ product.content }}
        </div>
        <div style="font-size:17px; text-align:center; font-weight:700;">
          <a
            class="decoration-none"
            :href="product.link"
          >Shop Now</a>
        </div>
      </div>
    </v-col>
  </v-row>

  <v-row
    style="padding-top:100px"
    class="my-12 text-center"
  >
    <v-col cols="12">
      <div style="font-size:60px; font-weight:600;">
        이번 주 IT-ITEM
      </div>
      <div
        class="py-4"
        style="font-size:40px; font-weight:400;"
      >
        이번 주 Kagu를 통해 공유할 수 있는 최고 매출을 소개합니다.
      </div>
    </v-col>
  </v-row>
  <v-row
    class="pa-6 text-center"
    justify="center"
  >
    <v-col
      v-for="product in products2"
      :key="product.modelImage"
    >
      <div class="brand-card1">
        <v-img
          height="200px"
          :src="product.brandImage"
        />
        <div class="pa-5 brand-content">
          {{ product.content }}
        </div>
        <div style="font-size:40px; text-align:center; font-weight:700;">
          <a
            class="decoration-none"
            :href="product.link"
          >Shop Now</a>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      selectedFile: "",
      products:[
        {
          modelImage: require("@/assets/brand/gapModel.webp"),
          brandImage: require("@/assets/brand/gap.svg"),
          content : "1월 말 이벤트로 60퍼의 마크다운 세일과 40퍼의 추가 세일도 만나보세요.",
          link : "https://www.gap.com/",
        },
        {
          modelImage: require("@/assets/brand/horModel.webp"),
          brandImage: require("@/assets/brand/horchow.jpg"),
          content : "침구, 욕조, 주방 필수품 등을 최대 65% 할인된 가격에 공유할 수 있으며, 코드를 사용하면 10-20% 할인됩니다! 할인코드 : HOME",
          link : "https://www.horchow.com/",
        },
        {
          modelImage: require("@/assets/brand/macysModel.webp"),
          brandImage: require("@/assets/brand/macys.webp"),
          content : "전체 사이트에서 25퍼 할인된 가격으로 만나보실 수 있습니다.",
          link : "https://www.macys.com/",
        },
        {
          modelImage: require("@/assets/brand/oldnavyModel.webp"),
          brandImage: require("@/assets/brand/oldnavy.webp"),
          content : "재고정리 세일! 3개사면 30%할인, 4개사면 40%할인, 5개 이상 구매시 50%할인",
          link : "https://oldnavy.gap.com/",
        },
      ],
      products2:[
        {
          brandImage: require("@/assets/brand/wallmart.jpeg"),
          content : "새해 리셋: 액티브 웨어 2023년 목표를 8달러부터 시작하는 새로운 활동복으로 부수세요.",
          link : "https://www.walmart.com/"
        },
        {
          brandImage: require("@/assets/brand/wayfair.png"),
          content : "Wayfair BIG 가구 세일! 주요 홈 딜링은 빠른 배송으로 거실, 침실, 사무실 가구를 최대 50% 할인합니다!",
          link : "https://www.wayfair.com/"
        },
        {
          brandImage: require("@/assets/brand/target.png"),
          content : "주방 및 식사 비용과 바닥 관리 용품을 최대 40% 절감할 수 있습니다. 귀하와 귀하의 가정을 위한 더 많은 거래를 살펴보십시오.",
          link : "https://www.target.com/"
        },
      ]
    }
  },
};
</script>
<style scoped>
.decoration-none {
  color: #000;
  font-size: 42px;
  font-family: dream;
  text-decoration : none !important; 
}
.brand-card1{
  display:inline-block;
  width:400px;
  height:700px;
}
.brand-img{
  width:400px;
  height:600px;
}
.brand-content{
  width:400px;
  font-size:35px;
  line-height: 50px;
  text-align: center;
}
</style>