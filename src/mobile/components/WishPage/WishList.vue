<template>
  <div class="width-980">
    <div class="item-box px-2">
      내가 찜한 상품
    </div>
    <hr class="h-line5">
    
    <WishContainer />
    <WishContainer />
    <WishContainer />
  </div>
</template>
  
  <script>
  import WishContainer from '@/web/components/WishPage/WishContainer.vue';
  
  export default {
    components: {
      WishContainer,
    },
  }
  </script>
  
  <style scoped>
  .item-box{
    line-height:50px;
    margin-top:10px;
    margin-left:10px;
    height:50px;
    width:950px;
    font-size:19px;
    font-weight:700;
    color:#D81B60;
  }
  .h-line5{
    border-style:solid;
    border-width:2px;
    border-color:#F48FB1;
  }
  </style>