<template>
  <div class="pa-10">
    <v-avatar
      color="white"
      size="56"
    >
      <v-img
        max-height="100"
        max-width="100"
        src="@/assets/kamua.png"
      />
    </v-avatar>

    <span
      class="mx-1"
      style="font-size: 22px; font-family: dream"
    >
      Kagu
    </span>
    <span
      class="
      d-flex
      align-center
      rounded-xl
      search-bar"
    >
      <v-text-field
        class="text-align-center"
        bg-color="#ECEFF1"
        density="comfortable"
        hide-details="auto"
        append-inner-icon="mdi-magnify"
      />
    </span>
    <v-icon
      large
    >
      mdi-heart
    </v-icon>
    <v-icon
      large
    >
      mdi-account
    </v-icon>
  </div>
  <div>
    <div class="group1">
      <img
        src="/play/line3.svg"
        alt="img002"
        height="30px"
        class="cate-img"
      >
      <span class="group1-text px-3">카테고리</span>
      <span class="v-line" />
      <span class="group1-text px-10">홈</span>
      <span class="group1-text px-10">핫딜</span>
      <span class="group1-text px-10">기획전</span>
      <span class="group2-text px-10">로그인</span>
    </div>
  </div>
</template>

<style>

.group1 {
  display: flex;
  height: 50px;
  padding:0px;
  position: relative;
  background-color: transparent;
  border-style:solid;
  border-width:1px 0px 1px 0px;
  border-color:#E0E0E0;
  text-align: center;
  vertical-align: middle;
}
.cate-img{
  margin-top:7px;
}
.group2-text {
  left: 30%;
  position: relative;
  background-color: transparent;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin-top:4px;
}
.group1-text{
  margin-top:4px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
}
.v-line{
  margin-top:5px;
  margin-left: 20px;
  border-left: solid;
  border-width:1px;
  border-color:#E0E0E0;
  height:38px;
}
.search-bar{
  width:500px;
}
</style>