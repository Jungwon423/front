<template>
  <div class="my-12 default-info3">
    <div class="pa-6">
      내가 쓴 댓글
    </div>
    <hr class="h-line4">
    <div class="product-detail1 pa-4">
      제목
      <span class="product-detail2">작성일</span> 
      <span class="product-detail3 mx-12">추천수</span>
    </div>
    <div class="comment-container">
      <div class="comment-wrapper">
        <div class="text-wrapper">
          <input type="checkbox">
        </div>
        <div class="text-wrapper">
          12130131
        </div>
        <div class="text-wrapper1 mx-12">
          제osdhgdshiohs제osdhgodshiohs제osdhgodshiohs제osd
        </div>
        <div class="text-wrapper2">
          20230203
        </div>
        <div class="text-wrapper mx-12">
          6
        </div>
      </div>
    </div>
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
.comment-container{
  position:relative;
  border: solid;
  border-width:1px 0px 1px 0px;
  border-color:#E0E0E0;
  border-radius: 2px;
  display:flex;
  text-align: start;
  font-size:17px;
  font-weight:400;
  width:930px;
}
.product-detail1{
  margin-left:350px;
  font-size:17px;
  height:60px;
}
.product-detail2{
  margin-left:280px;
}
.product-detail3{
  position:relative;
  left:10%;
}
.comment-wrapper{
  display:inline;
  margin-left:40px;
}
.text-wrapper{
  position:relative;
  display: inline-block;
  width:30px;
}
.text-wrapper1{
  display: inline-block;
  position:relative;
  margin-left:60px;
  width:400px;
  font-weight:500;
  text-overflow:ellipsis;
  overflow: hidden;
}

.text-wrapper2{
  margin-left:90px;
  right:7%;
  position:relative;
  display:inline-block;
}
</style>