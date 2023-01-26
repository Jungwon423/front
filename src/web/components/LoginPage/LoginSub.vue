<template>
  <v-btn
    class="brand1-btn-wrapper"
  >
    <v-img
      src="@/assets/카카오로고.png"
      class="brand-btn"
    />
    <span
      class="px-10"
      style="font-size:14px; font-weight:600;"
    > 카카오로 계속하기</span>
  </v-btn>

  <v-btn
    class="brand2-btn-wrapper"
    @click="doNaverLogin()"
  >
    <v-img
      src="@/assets/네이버로고.png"
      class="naver-btn"
      width="40px"
    />
    <span
      class="px-12"
      style="font-size:14px; font-weight:600;"
    >네이버로 계속하기</span>
  </v-btn>
  <v-btn
    class="brand3-btn-wrapper"
  >
    <v-img
      src="@/assets/구글로고.svg"
      class="brand-btn"
    />
    <span
      class="px-12"
      style="font-size:14px; font-weight:600;"
    >구글로 계속하기</span>
  </v-btn>
  <v-col>
    <div class="text-link1">
      비밀번호 찾기
    </div>
    <div
      class="py-2 text-link1"
      @click="goRegister()"
    >
      계정 생성하기
    </div>
    <div
      class="py-2 text-link1"
      @click="goLogin2()"
    >
      간편로그인 디자인 보기
    </div>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      password: null,
    }
  },
  methods: {
    goRegister() {
      this.$router.push('/register')
    },
    goLogin2() {
      this.$router.push('/Login2')
    },
    doNaverLogin() {
      const url = 'https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=' +
        'g45Um10Zkbqc0tRDbvsW' +
        '&redirect_uri=' +
        'http://localhost:8080/NaverLogin' +
        '&state=1234';

      this.showSocialLoginPopup(url)
    },
    showSocialLoginPopup(url) {
      const popupHeight = '500'
      const popupWidth = '500'
      let popupOptions = 'height=--popupHeight--,width=--popupWidth--,left=--popupX--,top=--popupY--,scrollbars=yes,resizable=yes'
      popupOptions = popupOptions.replace('--popupHeight--', popupHeight)
      popupOptions = popupOptions.replace('--popupWidth--', popupWidth)
      this.openPopup(url, popupOptions)
      return false
    },
    openPopup(url, options) {
      window.open(
          url,
          '_blank',
          options
      )
    },
    doLogout() {
      this.$cookie.removeCookie('user-key')
      this.userKey = ''
      this.user = {}
    },
  }
}
</script>

<style scoped>
.brand1-btn-wrapper{
  margin-top:20px;
  margin-left:12px;
  height:50px;
  width:350px;
  background-color:#FEE500;
}
.brand2-btn-wrapper{
  margin-top:20px;
  margin-left:12px;
  height:50px;
  width:350px;
  background-color:#03C75A;
  color:white;
}
.brand3-btn-wrapper{
  margin-top:20px;
  margin-left:12px;
  height:50px;
  width:350px;
  color:white;
  background-color:#4285F4;
}
.brand-btn{
  width:50px;
  height:50px;
  margin-left:-15px;
}
.naver-btn{
  width:50px;
  height:50px;
  margin-left:0px;
}
.text-link1{
  font-size:medium;
  font-weight:700;
  color:#616161;
}
.text-link1:hover{
  color:black;
  cursor: pointer;
}
</style>