<template>
  <div
    class="py-4 px-5"
    style="font-size:20; font-weight:600"
  >
    상품 한줄평
  </div>
  <span class="text-group5">&nbsp; &nbsp; ( {{ comments.length }} 개의 한줄평)</span>
  <hr>
  <v-row class="text-center">
    <v-col
      v-if="comments.length == 0"
    >
      <div class="messages">
        <v-img
          width="80"
          height="80"
          src="@/assets/empty-comment.jpg"
        />
      </div>
      <div class="empty-review1">
        등록된 댓글이 없습니다.
      </div>
    </v-col>
  </v-row>
  <div style="padding-top:30px;">
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
  </div>
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
    <please-login-dialog
      @close="closeWriteDialog"
    />
  </v-dialog>
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
      textfield: "",
      writeDialog: false
    }
  },
  computed: {
    comments: function() {
      return this.$store.state.Product.comments
    }
  },
  created() {
    jwtAxios.get('/product/comments?productId=' + encodeURIComponent(this.$route.query.name))
    .then((res) => {
      this.$store.commit('Product/SET_COMMENTS', res.data['result'])
      this.productId = res.data['result']['productId']
    })
  },
  methods: {
    writeComment() {
      if (this.$store.getters['Login/logined']) {
        jwtAxios.post('comment/write?productId=' + encodeURIComponent(this.$route.query.name), {'comment' : this.textfield})
        .then((res) => {
          this.textfield = ''
          jwtAxios.get('/product/comments?productId=' + encodeURIComponent(this.$route.query.name))
          .then((res) => {
            this.$store.commit('Product/SET_COMMENTS', res.data['result'])
            this.productId = res.data['result']['productId']
          })
        })
      }
      else {
          this.writeDialog = true
      }
    },
    closeWriteDialog() {
      this.writeDialog = false
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
.messages{
  position:relative;
  margin-top:20px;
  left:45.5%;
}
.empty-review1{
  font-size:20px;
  color: #BDBDBD;
}
</style>