<template>
  <v-footer class="bg-grey-lighten-1">
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-12"
        @click="goPage(link.src)"
      >
        {{ link.title }}
      </v-btn>
    </v-row>
  </v-footer>
  <v-avatar
    color="white"
    size="40"
  >
    <v-img
      max-height="100"
      max-width="200"
      src="@/assets/kamua.png"
    />
  </v-avatar>
  <span class="px-3">Kagu㈜</span>
  <div class="footer-text">
    <div>대표이사 : 김정원, 김정모, 오동근 | 주소: 서울특별시 중구 한강대로 416, Tel: 010-5689-5256</div>
  </div>
  <div
    class="py-1"
    style="font-size:11px; font-weight:700;"
  >
    Kagu㈜는 통신판매중개자로서 오픈마켓 카구의 거래당사자가 아니며, 입점판매자가 등록한 상품정보 및 거래에 대해 Kagu(주)는 일체 책임을 지지 않습니다.
  </div>
  <div
    style="font-size:10px; font-weight:500; color:#757575;"
  >
    Copyright 2023 Kagu Co .,Ltd. All Rights Reserved.
  </div>
  <div
    class="d-flex grow-1 footof"
    style="font-size:12px;"
  >
    © 2023 Kagu. 
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  data() {
  return {
    links: [
      {title:'Home',src:''},
      {title:'회사소개',src:'company'},
      {title:'이용약관',src:'policy'},
      {title:'로그인',src:'login'},
      ],
    }
  },
  methods: {
    goPage(id){
      this.$router.push('/'+id)
    }
  },
}
</script>
<style scoped>
.footof{
  background-color: white;
}
.footer-text{
  font-size:12px;
}
</style>