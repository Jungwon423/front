<template>
  <v-carousel
    hide-delimiters
    hide-delimiter-background
    :continuous="false"
    cycle
    :show-arrows="false"
    interval="10000"
    height="1000"
    width="2000"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    />
  </v-carousel>
  <div class="text-center carousel-title1">
    <div>
      스마트한 쇼핑 경험을 만나보세요
    </div>
    <div>
      Kagu
    </div>
  </div>
  <div class="text-wrapper-group1 pa-12">
    <div class="text-group12 pa-3">
      E-Commerce Eco Sysem
    </div>
    <div class="text-group13 pa-5">
      Kagu는 고객(Customer)와 업체(Provider)를 상품(Product) 중심으로 
      연결해주는 전자 상거래 생태계를 구축하고자 합니다.
    </div>
  </div>
  <div class="text-center kagu-title">
    Kagu는 왜 다를까?
  </div>
  <div class="card-wrapper">
    <div class="pa-2 company-card1">
      <div class="card-title">
        Technology
      </div>
      <v-img src="@/assets/company/기술1.jpg" />
      <div class="py-4 card-content">
        Kagu가 개발한 커머스 검색 기술, 네이버 최저가 가격비교 기술은 고객에게 더욱 편리한 쇼핑 경험을 제공합니다.
      </div>
    </div>
    <div class="pa-2 mx-10 company-card1">
      <div class="card-title">
        Price-competitiveness
      </div>
      <v-img src="@/assets/company/보상.jpg" />
      <div class="py-4 card-content">
        Kagu만의 다양한 보상제와 이벤트들은 고객들에게 가격 경쟁력을 확보해 줍니다.
      </div>
    </div>
    <div class="company-card2">
      <div class="card-title">
        Comfort
      </div>
      <v-img
        src="@/assets/company/편리3.jpg"
      />
      <div class="py-4 card-content">
        Kagu는 배송 대행과 편리한 구성으로 버튼 한 번으로 손쉬운 쇼핑 경험을 제공합니다.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
            src: require('@/assets/company/배경1.jpg'),
        },
        {
            src: require('@/assets/company/19배경1.jpg'),
        },
        {
            src: require('@/assets/company/배경2.jpg'),
        },
        {
            src: require('@/assets/company/배경3.jpg'),
        },
      ],
    }
  },
}
</script>
<style scoped>
.carousel-title1{
  color:white;
  font-size:80px;
  width:700px;
  position:absolute;
  top:25%;
  left:35%
}
.text-wrapper-group1{
  display:flex;
  font-size:60px;
}
.text-group12{
  display:inline-block;
  width:50%;
  font-size:60px;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.text-group13{
  display:inline-block;
  font-family:"poppin";
  font-size:45px;
}
.kagu-title{
  padding:50px;
  font-size:55px;
  font-weight:700;
}
.card-wrapper{
  display:flex;
}
.company-card1{
  width:350px;
  border-style:solid;
  border-width:1px;
  border-color:azure;
  border-radius:8px;
}
.company-card2{
  position:relative;
  margin-top:10px;
  width:350px;
  height:700px;
  border-style:solid;
  border-width:1px;
  border-color:azure;
  border-radius:8px;
}
.card-title{
  font-size:45px;
  font-weight:700;
}
.card-content{
  font-size:30px;
  font-weight:600;
}
</style>