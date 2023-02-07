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
    <ProfileComment />
    <ProfileComment />
  </div>
</template>
  
  <script>
  //import ProductContainer from '@/web/components/CategoryPage/ProductContainer.vue';
  import ProfileComment from '@/web/components/ProfilePage/ProfileComment.vue';
  
  export default {
    name: 'ProductList',
    components: {
      ProfileComment,
    },
    /*
    computed: {
      productList: function () {
        console.log(this.$store.state.Category.productList)
        return this.$store.state.Category.productList
      },
      productCount: function () {
        return this.$store.state.Category.productCount
      },
      currentCategory: function () {
        return this.$categoryMap.get(this.$store.state.Category.currentCategory)
      }
    },
    
    async created() {
      await this.$store.dispatch('Category/FETCH_PRODUCTLIST_API')
    }
    */
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
  </style>