<template>
  <div
    class="py-4 px-5"
    style="font-size:20; font-weight:600"
  >
    상품 한줄평
  </div>
  <span class="text-group5">&nbsp; &nbsp; ( {{ comments.length }} 개의 한줄평)</span>
  <hr>
  <single-review
    v-for="comment in comments"
    :id="comment.id"
    :key="comment"
    :name="comment.writerId"
    :content="comment.content"
    :good="comment.good"
    :bad="comment.bad"
    :timestamp="comment.timestamp"
    :image-url="comment.imageUrl"
  />
  
  <div
    class="text-wrapper"
  >
    <v-textarea
      v-model="textfield"
      variant="solo"
      bg-color="#FAFAFA"
      no-resize
      rows="5"
      counter="200"
      color="transparent"
      class="comment-text"
    />
  </div>
  <v-dialog
    v-model="writeDialog"
    max-width="500px"
    height="500px"
  >
    <template #activator="{ attrs }">
      <div class="btn-wrapper">
        <v-btn
          variant="tonal"
          class="write-btn"
          v-bind="attrs"
          @click="writeComment"
        >
          한줄평 등록
        </v-btn>
      </div>
    </template>
    <please-login-dialog />
  </v-dialog>
  <!--  
  <div class="py-10 user-write">
    <div class="search-bar-wrapper">
      <textarea
        class="comment"
        name="content"
        cols="40"
        rows="8"
      >
        폼의 기본 내용 값이 들어갑니다.
        줄 바꿈 및
        공란도 그대로 인식하고,
        <strong>이런 태그도</strong> 소스가 그대로 노출됩니다.
      </textarea>
    </div>
  </div>-->
</template>

<script>
import jwtAxios from '@/library/jwtAxios'
import SingleReview from './SingleReview.vue'
import PleaseLoginDialog from './PleaseLoginDialog.vue';

export default {
  name: 'ProductInfo',
  components: {
    SingleReview,
    PleaseLoginDialog
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      productId: '',
      comments:[],
      textfield: "",
      writeDialog: false
    }
  },
  created() {
    jwtAxios.get('/product/' + this.$route.query.name + '/comments')
    .then((res) => {
      console.log(res.data['result'])
      this.comments = res.data['result']
      this.productId = res.data['result']['productId']
    
    })
  },
  methods: {
    writeComment() {
      if (this.$store.getters['Login/logined']) {
        jwtAxios.post('comment/' + this.$route.query.name +'/write', {'comment' : this.textfield})
        .then((res) => {
          this.textfield = ''
          jwtAxios.get('/product/' + this.$route.query.name + '/comments')
          .then((res) => {
            this.comments = res.data['result']
            this.productId = res.data['result']['productId']
          })
        })
      }
      else {
          this.writeDialog = true
      }
    }
  },
}
</script>
<style scoped>
.text-group5{
  position:relative;
  bottom:0.5%;
}
.text-wrapper{
  display: flex;
  border-style:solid;
  border-radius:10px;
  border-color:#FAFAFA;
  border-width:1px;
  width:950px;
  height:150px;
}
.comment-text{
  width:850px;
  border: none;
}
.btn-wrapper{
  height:70px;
}
.write-btn{
  background-color:#FAFAFA;
  float:right;
  position:relative;
  right:3%;
  top:10%;
  font-size:15px;
  font-weight: 600;
}
</style>