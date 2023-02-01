<template>
  <div
    class="py-4 px-5"
    style="font-size:20; font-weight:600"
  >
    상품 리뷰
  </div>
  <span>
    <v-rating
      v-model="rating"
      class="px-5"
      value="4.5"
      color="#FFB300"
      empty-icon="mdi-star-outline"
      full-icon="mdi-star"
      half-icon="mdi-star-half"
      half-increments
      readonly
      size="30"
    />
  </span>
  <span class="text-group5">4.5</span>
  <span class="text-group5">&nbsp; &nbsp; (30개의 리뷰)</span>
  <hr>
  <div
    v-for="user in users"
    :key="user"
    style="display:inline"
    class="pa-8"
  >
    <div style="display:flex">
      <div class="img-block">
        <v-avatar
          size="50"
          class="rounded-xl"
          color="wheat"
          :image="user.src"
        />
      </div>
      <div class="user-block">
        <div class="user-name">
          {{ user.name }}
        </div>
        <div class="user-id">
          @{{ user.id }}
        </div>
      </div>  
      <div class="ddabong-card10">
        <div class="ddabong">
          <div v-if="fill1">
            <v-img
              src="@/assets/thumbs/따봉2.png"
              @click.stop="changeBtn1()"
            />
          </div>
          <div v-if="empty1">
            <v-img
              src="@/assets/thumbs/추천.png"
              @click.stop="changeBtn1()"
            />
          </div>
        </div>
        <div class="ddabong-text">
          7
        </div>
      </div>
      <div class="ddabong-card11">
        <div class="ddabong">
          <div v-if="fill2">
            <v-img
              src="@/assets/thumbs/우우2.png"
              @click.stop="changeBtn2()"
            />
          </div>
          <div v-if="empty2">
            <v-img
              src="@/assets/thumbs/비추천.png"
              @click.stop="changeBtn2()"
            />
          </div>
        </div>
        <div class="ddabong-text">
          0
        </div>
      </div>
    </div>
    <div class="user-rating">
      <v-rating
        v-model="user.rating"
        class="px-5"
        :value="user.rating"
        color="#FFB300"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        half-icon="mdi-star-half"
        half-increments
        readonly
        size="20"
      />
      <span>{{ user.rating }}점</span>
    </div>
    <div class="user-content py-4">
      {{ user.content }}
    </div>
  </div>
  <div class="comment-rating">
    <v-rating
      v-model="rating"
      class="px-5"
      :value="rating"
      color="#FFB300"
      empty-icon="mdi-star-outline"
      full-icon="mdi-star"
      half-icon="mdi-star-half"
      half-increments
      readonly
      size="20"
    />
    <span>{{ rating }}점</span>
  </div>
  <div
    class="text-wrapper"
  >
    <v-textarea
      variant="solo"
      bg-color="#FAFAFA"
      no-resize
      label="로그인 후에 댓글을 작성하세요."
      counter="200"
      color="transparent"
      class="comment-text"
    />
  </div>
  <div class="btn-wrapper">
    <v-btn
      variant="tonal"
      class="write-btn"
    >
      저장
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

export default {
  name: 'ProductInfo',
  data() {
  return {
    empty1: true,
    empty2: true,
    fill1: false,
    fill2: false,
    rating: 4.5,
    context:'',
    users:[
    {
      name: "오동근",
      id: "oreo1001",
      rating:3.0,
      content: 'Play 스토어에서 Android 앱, 게임, 기타 콘텐츠를 평가하고 검토할 수 있습니다. Google Play에서 리뷰를 작성하면 리뷰가 Google 계정에 연결되며 다른 사용자에게 공개됩니다.\
      리뷰를 공개하고 싶지 않다면 삭제하면 됩니다.진짜 어이없넹 이게 맞냐?',
      src: require('@/assets/account.png'),
      date: '2023.01.22',
    },
    {
      name: "김정원",
      id: "rlawjddnjs",
      rating:4.5,
      content: '좋습니다!',
      src: require('@/assets/thumbs/개추.png'),
      date: '2023.01.21',
    }]
  }
  },
  methods:{
    changeBtn1(){
      this.empty1 = !this.empty1;
      this.fill1 = !this.fill1;
    },
    changeBtn2(){
      this.empty2 = !this.empty2;
      this.fill2 = !this.fill2;
    },
  }
}
</script>
<style scoped>
.text-group5{
  position:relative;
  bottom:0.5%;
}
.img-block{
  display:flex;
  height:70px;
}
.user-name{
  font-size:14px;
  font-weight:600;
}
.user-id{
  font-size:12px;
  color:#B0BEC5;
}
.user-block{
  position:relative;
  height:70px;
  margin-top:8px;
  margin-left:12px;
  font-size:12px;
  font-weight: 500;
  display:block;
}
.user-rating{
  display:block;
  position: relative;
  height:10px;
  left:-20px;
  top:-15px;
}
.user-content{
  width :980px;
  border-bottom:solid;
  border-width:1px;
  border-color:#E0E0E0;
}

.ddabong-card10{
  text-align:end;
  position:relative;
  margin-top:10px;
  left:70%;
  display:flex;
  width:100px;
}
.ddabong-card11{
  text-align:end;
  position:relative;
  margin-top:10px;
  left:65%;
  display:flex;
  width:100px;
}
.ddabong{
  display: inline-block;
  width:30px;
} 
.ddabong-text{
  text-align: center;
  margin:3px;
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
  float:right;
  position:relative;
  right:3%;
  top:10%;
  font-size:15px;
  font-weight: 600;
}
</style>