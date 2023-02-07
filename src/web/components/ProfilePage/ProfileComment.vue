<template>
  <div class="my-12 default-info3">
    <div class="pa-6">
      내가 쓴 댓글
    </div>
    <hr class="h-line4">
    <div class="product-detail1 pa-4">
      <span class="product-detail0">댓글 id</span>
      <span>제목</span>
      <span class="product-detail2">작성일</span> 
      <span class="product-detail3 mx-4">추천수</span>
    </div>
    <hr class="h-line5">
    <v-row class="text-center">
      <v-col>
        <div class="messages">
          <v-img
            width="80"
            height="80"
            src="@/assets/empty-comment.jpg"
          />
        </div>
        <div class="empty-review1">
          내가 작성한 댓글이 없습니다.
        </div>
      </v-col>
    </v-row>
    <div class="comment-container2">
      <div class="comment-wrapper1">
        <span class="text-wrapper">
          <input type="checkbox">
        </span>
        <span class="text-wrapper">
          12130131
        </span>
      </div>
      <div class="comment-wrapper2">
        <div class="text-wrapper1">
          안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.
        </div>
      </div>
      <div class="comment-wrapper3">
        <div class="text-wrapper2">
          20230203
        </div>
      </div>
      <div>6</div>
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
.h-line5{
  border-style:solid;
  border-width:1px;
  border-radius:3px;
  border-color:#F5F5F5;
  width:930px;
}
.messages{
  position:relative;
  margin-top:20px;
  left:45.5%;
}
.empty-review1{
  font-size:20px;
  color: #BDBDBD;
}
.product-detail1{
  margin-left:350px;
  font-size:17px;
  height:60px;
}
.product-detail0{
  position:relative;
  right:50%;
}
.product-detail2{
  margin-left:280px;
}
.product-detail3{
  position:relative;
  left:10%;
}

.comment-container2{
  position:relative;
  border: solid;
  border-width:0px 0px 1px 0px;
  border-color:#E0E0E0;
  border-radius: 2px;
  display:flex;
  text-align: start;
  font-size:17px;
  font-weight:400;
  padding-top:8px;
  padding-bottom:8px;
  width:930px;
}
.comment-wrapper1{
  display:inline-block;
  width:200px;
}
.comment-wrapper2{
  display:inline-block;
  width:500px;
}
.comment-wrapper3{
  display:inline-block;
  width:180px;
}
.text-wrapper{
  position:relative;
  display: inline-block;
  width:30px;
  left:20%;
}
.text-wrapper1{
  display: inline-block;
  position:relative;
  margin-left:10px;
  font-weight:500;
  white-space:normal;
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow:ellipsis;
}

.text-wrapper2{
  margin-left:20px;
  position:relative;
  display:inline-block;
}
</style>