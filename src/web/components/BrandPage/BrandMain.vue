<template>
  <!-- 
  <div>
    <div class="ma-6 banner-box">
      <div class="banner-inner-box1">
        <div class="pa-10">
          <div>Happy New Year</div>
          <div>브랜드패션</div>
          <div>신년맞이 SALE!</div>
          <v-btn>자세히 보기</v-btn>
        </div>
      </div>
      <div class="banner-inner-box2">
        <v-img
          width="200px"
          height="200px"
          src="@/assets/company/19배경1.jpg"
        />
      </div>
    </div>
    <div class="ma-6 banner-box">
      <div class="banner-inner-box1">
        <div class="pa-10">
          <div>Happy New Year</div>
          <div>브랜드패션</div>
          <div>신년맞이 SALE!</div>
          <v-btn>자세히 보기</v-btn>
        </div>
      </div>
      <div class="banner-inner-box2">
        <v-img
          width="200px"
          height="200px"
          src="@/assets/proExample.png"
        />
      </div>
    </div>
  </div>
   -->
  <v-row class="my-4 text-center">
    <v-col cols="12">
      <div style="font-size:30px; font-weight:600;">
        브랜드 기획전
      </div>
      <div
        class="py-4"
        style="font-size:17px; font-weight:400;"
      >
        해외 탑 브랜드의 세일을 알아보세요
      </div>
    </v-col>
  </v-row>
  <v-row
    class="pa-6 text-center"
    justify="center"
  >
    <brand-container1 
      v-for="brand in brandList1"
      :key="brand"
      :brand-image="brand.brandImage"
      :content="brand.content"
      :link="brand.link"
    />
  </v-row>

  <v-row
    style="padding-top:100px"
    class="my-12 text-center"
  >
    <v-col cols="12">
      <div style="font-size:30px; font-weight:600;">
        이번 주 SALE ITEM!
      </div>
      <div
        class="py-4"
        style="font-size:17px; font-weight:400;"
      >
        이번 주 Kagu를 통해 공유할 수 있는 세일 정보를 소개합니다.
      </div>
    </v-col>
  </v-row>
  <!-- <v-row
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
        <div style="font-size:17px; text-align:center; font-weight:700;">
          <a
            class="decoration-none"
            :href="product.link"
          >Shop Now</a>
        </div>
      </div>
    </v-col>
  </v-row> -->
</template>
<script>
import BrandContainer1 from './BrandContainer1.vue';
export default {
  components : {
    BrandContainer1
  },
  computed: {
    brandList1 : function(){
      return this.$store.state.Brand.brandList1
    },
    brandList2 : function(){
      return this.$store.state.Brand.brandList2
    },
  },
  created(){
    this.$store.dispatch('Brand/FETCH_BRANDLIST1_API')
    this.$store.dispatch('Brand/FETCH_BRANDLIST2_API')
  },
};
</script>
<style scoped>
.banner-box{
  display: inline-block;
  width:500px;
  height:250px;
  background-color: beige;
}
.banner-inner-box1{
  display:inline-block;
  width:300px;
  height:200px;
}
.banner-inner-box2{
  display:inline-block;
  width:200px;
  height:200px;
}
.brand-card1{
  display:inline-block;
  width:350px;
  height:700px;
}
.brand-img{
  width:350px;
  height:400px;
}
.brand-content{
  width:350px;
  font-size:20px;
  line-height: 30px;
  text-align: center;
}
</style>