<template>
  <div class="my-12 default-info3">
    <div class="pa-6">
      내가 쓴 댓글
    </div>
    <hr class="h-line4">
    <div class="product-detail1 pa-4">
      제목
      <span class="product-detail2">작성일</span> 
      <span class="mx-12">추천수</span>
    </div>
    <div class="good-container" />
  </div>
</template>
  
<script>
export default {
    name: 'ProfileGood',
    data () {
        return {}
    },
}
</script>

<style scoped>
.default-info3{
margin-left:40px;
width:980px;
font-size:20px;
font-weight: 600;
color:#424242;
}
.h-line4{
border-style:solid;
border-width:3px;
border-radius:3px;
border-color:#BDBDBD;
width:930px;
}
.good-container{
position:relative;
border: 1px solid;
border-color:black;;
border-radius: 2px;
display:flex;
text-align: start;
height:100px;
width:930px;
}
.product-detail1{
margin-left:280px;
font-size:17px;
height:60px;
}
.product-detail2{
margin-left:70px;
}
</style>