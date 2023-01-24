<template>
  <div class="product-container">
    <img
      class="product-image"
      src="https://i.ebayimg.com/images/g/A5UAAOSwK39hi5H1/s-l300.jpg"
      width="180"
      height="180"
    >
    <span class="product-info py-2">
      <div>Canon Cemra EOS 200D, Black 10x zoom</div>
      <div class="py-2">
        <span style="font-size:15px;">87,000원</span>
        <span class="origin-price">110,000원</span>
        <div class="naver-price">네이버 최저가 : 103,000원</div>
      </div>
      <div class="rating-review">
        <v-rating
          v-model="rating"
          class="px-5"
          value="3.5"
          color="#FFB300"
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-star-half"
          half-increments
          readonly
          size="15"
        />
        <div class="rating-num">3.0</div>
        <div class="v-line3" />
        <span class="img-message py-2">
          <v-img
            src="@/assets/message.png"
            width="20px"
            height="20px"
          />
        </span>
        <span class="py-2">리뷰 : 35개</span>
      </div>
      <div>
        조회수 : 401,222
      </div>
    </span>

    <div class="shopping-mall py-4">
      <v-img
        src="@/assets/Amazon.png"
        width="50"
      />
      <div class="shopping-mall-text">
        Amazon
      </div>
    </div>
    <div class="community-info">
      <div
        v-if="empty"
        class="heart-box"
      >
        <v-icon
          icon="mdi-heart-outline"
          color="#A1887F"
          size="large"
          class="heart-icon"
          @click="changeBtn()"
        />
      </div>
      <div
        v-if="fill"
        class="heart-box"
      >
        <v-icon
          icon="mdi-heart"
          color="#A1887F"
          size="large"
          class="heart-icon"
          @click="changeBtn()"
        />
      </div>
      
      <div class="recommend">
        <div class="recommend-text">
          추천 73
        </div>
        <div class="recommend-text">
          비추천 10
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rating: 3,
      empty:true,
    }
  },
  methods:{
    changeBtn(){
      this.empty = !this.empty;
      this.fill = !this.fill;
    }
  }
}
</script>

<style scoped>
.product-container {
  display: flex;
  padding: 10px;
  margin: 10px;
  width: 950px;
  height: 200px;
  border: 1px solid;
  border-width:1px;
  border-color:#E0E0E0;
  border-radius: 8px;
}
.origin-price{
  padding-left:3px;
  color:#757575;
  text-decoration-line: line-through;
  font-size:12px;
}
.v-line3{
  margin-top:10px;
  padding-right:10px;
  border-left: solid;
  border-width:1px;
  border-color:#E0E0E0;
  height:20px;
}
.naver-price{
  color:#F4511E;
  font-size:14px;
}
.rating-num{
  position:relative;
  color:#FFB300;
  font-weight:500;
  margin-top:1%;
  left:-2%;
}
.rating-review{
  display: flex;
  position:relative;
  top:-8%;
  left:-5%;
}
.shopping-mall-text{
  font-size:14px;
  color:#BDBDBD;
}
.recommend{
  margin-top:60px;
}
.recommend-text{
  font-size:15px;
  font-weight:600;
  text-align: end;
}
.product-image {
  vertical-align:middle;
}
.product-info {
  padding-left: 30px;
  width: 500px;
}
.heart-box{
  position:relative;
  top:5%;
  left:60%;
  display:flex;
  vertical-align: middle;
  border-style:solid;
  border-width:1px;
  border-color:#BDBDBD;
  border-radius:7px;
  width:40px;
  height:40px;
  color: #000;
  background-color: #fff;
  box-shadow: 0px 8px 15px white;
  cursor: pointer;
}
.heart-box:hover {
  background-color: #EEEEEE;
  box-shadow: 0px 2px 2px #E0E0E0;
}
.heart-icon{
  position:relative;
  left:13%;
  top:13%;
}
.shopping-mall {
  width: 80px;
}
.community-info {
  width: 100px;
}
</style>
