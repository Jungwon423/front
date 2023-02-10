<template>
  <div class="my-12 default-info3">
    <div class="pa-6 product-title">
      내가 쓴 댓글
    </div>
    <div class="del-btn">
      <v-btn
        variant="outlined"
      >
        선택삭제
      </v-btn>
    </div>
    <hr class="h-line4">
    <div class="product-detail1 pa-4">
      <span class="product-detail0">댓글 id</span>
      <span>제목</span>
      <span class="product-detail2">작성일</span> 
      <span class="product-detail3 mx-4">추천수</span>
    </div>
    <no-comments 
      v-if="comments==null || comments.length==0"
    />
    <ProfileComment
      v-for="comment in comments"
      :id="comment.id"
      :key="comment"
      :content="comment.content"
      :timestamp="comment.timestamp"
      :good-number="comment.good == null ? 0 : comment.good.length"
    />
  </div>
</template>
  
  <script>
  import NoComments from '@/web/components/ProfilePage/NoComments.vue'
  import ProfileComment from '@/web/components/ProfilePage/ProfileComment.vue';
  
  
  export default {
    name: 'ProductList',
    components: {
      NoComments,
      ProfileComment,
    },
    computed: {
      comments: function() {
        return this.$store.state.Profile.comments
      }
    }
  }
  </script>
  
  <style scoped>
.product-title{
  display:inline-block;
}
.del-btn{
  display:inline-block;
  position:relative;
  top:10%;
  left:65%;
  font-size:14px;
  font-weight:800;
}
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
  </style>