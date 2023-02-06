<template>
  <div
    class="py-4 px-5"
    style="font-size:20; font-weight:600"
  >
    상품 리뷰
  </div>
  <span class="text-group5">&nbsp; &nbsp; (30개의 리뷰)</span>
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
  <div class="btn-wrapper">
    <v-btn
      variant="tonal"
      class="write-btn"
      @click="writeComment"
    >
      한줄평 등록
    </v-btn>
  </div>
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

export default {
  name: 'ProductInfo',
  components: {
    SingleReview
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      rating: 4.5,
      productId: '',
      comments:[
      {
        id: "oreo1001",
        writerId: "오동근",
        content: 'Play 스토어에서 Android 앱, 게임, 기타 콘텐츠를 평가하고 검토할 수 있습니다. Google Play에서 리뷰를 작성하면 리뷰가 Google 계정에 연결되며 다른 사용자에게 공개됩니다.\
        리뷰를 공개하고 싶지 않다면 삭제하면 됩니다.진짜 어이없넹 이게 맞냐?',
        good: 0,
        bad: 0,
        timestamp: '2023.01.22',
        productId: ''
        // src: require('@/assets/account.png'),
      },
      {
        id: "rlawjddnjs",
        writerId: "김정원",
        content: '좋습니다!',
        good: 0,
        bad: 0,
        timestamp: '2023.01.21',
        productId: '',
        // src: require('@/assets/thumbs/개추.png'),
      }],
      textfield: ""
    }
  },
  created() {
    jwtAxios.get('/product/' + this.$route.query.name + '/comments')
    .then((res) => {
      this.comments = res.data['result']
      this.productId = res.data['result']['productId']
    
    })
  },
  methods: {
    writeComment() {
      jwtAxios.post('comment/' + this.productId +'/write', {'comment' : this.textfield})
      this.textfield = ''
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