<template>
  <div class="width-980">
    <div class="pa-10 flex-titlebar">
      <router-link
        to="/"
        class="decoration-none"
      >
        <span style="color:#6D4C41; font-size:27px">
          Kagu
        </span>
      </router-link>
    </div>
  </div>
  <div class="item-box px-2">
    <span style="color:#6D4C41">찜한 상품</span>
  </div>
  <hr class="h-line5">
</template>
<style scoped>
.flex-titlebar{
  height:100px;
}
.item-box{
  line-height:50px;
  margin-top:10px;
  margin-left:10px;
  height:50px;
  width:950px;
  font-size:19px;
  font-weight:700;
}
.h-line5{
  border-style:solid;
  border-width:2px;
  border-color:#A1887F;
}
</style>