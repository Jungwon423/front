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
    class="pa-8"
  >
    <span>
      <v-avatar
        size="50"
        class="rounded-xl"
        color="wheat"
        :image="user.src"
      />
    </span>
    <span class="user-block">
      <span>{{ user.name }}</span>
      <div>
        {{ user.id }}
      </div>
    </span>
      
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
      <span>{{ user.rating }}</span>
    </div>
    <div class="user-content py-4">
      {{ user.content }}
    </div>
    <div class="date-time">
      {{ user.date }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductInfo',
  data() {
  return {
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
      content: '최고다 이기야 개추노 앙노무띠',
      src: require('@/assets/개추.png'),
      date: '2023.01.21',
    }
    ]
  }
},
}
</script>
<style scoped>
.text-group5{
  bottom:0.5%;
  position:relative;
}
.user-block{
  font-size:13px;
  display:inline-block;
}
.user-rating{
  position:relative;
  left:-15px;
}
.user-content{
  width :980px;
}
.date-time{
  color:#546E7A;
  font-size:14px;
  text-align: end;
}
</style>