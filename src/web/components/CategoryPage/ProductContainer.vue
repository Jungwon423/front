<template>
  <div class="product-container">
    <img
      class="product-image"
      src="https://i.ebayimg.com/images/g/A5UAAOSwK39hi5H1/s-l300.jpg"
      width="180"
      height="180"
    >
    <span class="product-info">
      <div>Canon Cemra EOS 200D, Black 10x zoom</div>
      <div>
        <span>현재 가격 : $998.00</span>
        <span>네이버 최저가 : $1128.00</span>
      </div>
      <div>
        <v-rating 
          v-model="rating"
          color="white"
          active-color="yellow-accent-4"
          half-increments
          hover
          size="18"
        />
      </div>
      <div>
        조회수 : 401,222
      </div>
    </span>

    <div class="shopping-mall">
      <v-img
        src="@/assets/Amazon.png"
        width="50"
      />
    </div>

    <div class="community-info">
      <v-icon icon="mdi-heart-box-outline" />
      <div>추천</div>
      <div>비추천</div>
      <div>댓글 </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rating: 3
    }
  }
}
</script>

<style scoped>
.product-container {
    display: flex;
    padding: 10px;
    margin: 10px;
    width: 800px;
    height: 200px;
    border: 1px solid;
    border-radius: 10px;
}
.product-image {
  vertical-align:middle;
}
.product-info {
  padding-left: 30px;
  width: 500px;
}
.shopping-mall {
  width: 80px;
}
.community-info {
  width: 100px;
}
</style>
