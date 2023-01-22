<template>
  <div class="pa-10 flex-titlebar">
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
  
    <div class="search-bar-wrapper">
      <input
        type="text"
        name="hot"
        placeholder="최근 핫딜"
        class="search-bar"
      >
      <div class="search-btn1 text-center">
        <v-row
          align-content="center"
        >
          <v-col>검색</v-col>
        </v-row>
      </div>
    </div>
    <v-row
      class="text-center"
      justify="center"
    >
      <v-col>
        <div class="icon-group1">
          <v-icon
            large
            color="grey"
          >
            mdi-account
          </v-icon>
          <div
            class="py-2"
            style="text-align:center"
          >
            내 프로필
          </div>
        </div>
      </v-col>
      <v-col>
        <div class="icon-group2">
          <v-icon
            large
            color="grey"
          >
            mdi-heart
          </v-icon>
          <div
            class="py-2"
            style="text-align:center"
          >
            나의 찜
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
    

  <div>
    <div class="group1">
      <img
        src="/play/line3.svg"
        alt="img002"
        height="30px"
        class="cate-img"
      >
      <span
        class="group1-text px-3"
        @click="gopage"
      >카테고리</span>
      <span class="v-line" />
      <span class="group1-text px-10">홈</span>
      <span class="group1-text px-10">핫딜</span>
      <span class="group1-text px-10">기획전</span>
      <span class="group2-text px-10">로그인</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    gopage() {
      this.$router.push('/category')
    },
  },
}
</script>

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
.search-bar-wrapper{
  display: flex;
  border-style:solid;
  border-radius:10px;
  border-color:#6D4C41;
  border-width:1px;
  margin-left:50px;
  width:400px;
}
.search-bar{
  position:relative;
  width:400px;
  left:5%;
}
.search-btn1{
  display:flex;
  height:auto;
  width:100px;
  margin-left:50px;
  border-color:#6D4C41;
  border-radius:0px 9px 9px 0px;
  background-color:#8D6E63;
  border-width:1px;
  color:white;
}
.flex-titlebar{
  display: flex;
}
.icon-group1{
  position:absolute;
  right:20%;
  width:100px;
  display:block;
  font-size:small;
}
.icon-group2{
  position:absolute;
  right:10%;
  width:100px;
  display:block;
  font-size:small;
}
</style>