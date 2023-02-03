<template>
  <div>
    <div class="banner">
      <!-- 홍보 배너 -->
      <v-carousel
        :show-arrows="false"
        :hide-delimiters="true"
        height="400"
      >
        <v-carousel-item
          src="@/assets/홈그림.png"
          max-height="400px"
          cover
        />

        <v-carousel-item
          src="@/assets/상품정보1.png"
          max-height="400px"
          cover
        />

        <v-carousel-item
          src="@/assets/상품정보2.png"
          cover
          max-height="400px"
        />
      </v-carousel>
    </div>
    <div class="innerText1">
      Super Flash Sale
    </div>
  </div>
</template>

<style scoped>
.banner{
  padding-top:10px;
  padding-bottom: 10px;
  top:-8px;
  position:relative;
  background-color: transparent;
}
.innerText1{
  color:white;
  font-size: 60px;
  font-weight: 500;
  line-height: 70px;
  position:absolute;
  top:20%;
  left:30%;
}
</style>