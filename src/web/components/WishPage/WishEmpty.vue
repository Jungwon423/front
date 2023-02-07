<template>
  <v-row class="text-center">
    <v-col>
      <div class="heart">
        <v-icon
          icon="mdi-heart"
          color="#BDBDBD"
          size="large"
          class="heart-icon"
        />
      </div>
      <div class="text1">
        저장된 위시리스트가 없습니다.
      </div>
      <div class="text2">
        <div>원하는 제품 화면에서</div>
        <div>하트 아이콘을 눌러 위시리스트를 만들어보세요.</div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style scoped>
.heart{
    margin-top:100px;
    font-size:50px;
    height: 150px;
}
.text1{
    font-size:22px;
    font-weight:500;
    color:#424242;
}
.text2{
    margin-top:20px;
    font-size:20px;
    font-weight:400;
    color:#757575;
}
</style>