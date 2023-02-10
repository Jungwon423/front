<template>
  <v-btn
    class="brand1-btn-wrapper"
    @click="loginWithKakao"
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
    @click="clickNaver()"
  >
    <div>
      <div id="naver_id_login" />
    </div>
    <span
      class="px-12"
      style="font-size:14px; font-weight:600;"
    >네이버로 계속하기</span>
  </v-btn>
  <a
    class="decoration-none" 
    :href="google_redirect"
  >
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
  </a>
  <v-col>
    <!-- 
    <div class="text-link1">
      비밀번호 찾기
    </div>
    -->
    <div
      class="py-2 text-link1"
      @click="goAgree()"
    >
      일반 회원가입 >
    </div>
    <!-- 
    <div
      class="py-2 text-link1"
      @click="goLogin2()"
    >
      간편로그인 디자인 보기
    </div>
     -->
  </v-col>
</template>
<script>
export default {
  data() {
    return {
      id: null,
      password: null,
      google_redirect : "https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=code&client_id=862259299846-ham1sak40i9ampguua9m9mrnqqdonfa8.apps.googleusercontent.com&redirect_uri=" +process.env.VUE_APP_HOME_URL +'/google',
    }
  },
  mounted (){
    const naver_id_login = new window.naver_id_login(process.env.VUE_APP_NAVER_CLIENT, process.env.VUE_APP_HOME_URL + "/naver");
    const state = naver_id_login.getUniqState();
    naver_id_login.setState(state);
    // naver_id_login.setPopup(); // popup 설정을 위한 코드
    naver_id_login.init_naver_id_login();
  },
  methods: {
    loginWithKakao() {
      Kakao.Auth.authorize({
      redirectUri: process.env.VUE_APP_HOME_URL + '/kakao',
      });
    },
    goAgree() {
        this.$router.push('/register/agree')
      },
    goLogin2() {
      this.$router.push('/Login2')
    },
    clickNaver(){
      var el = document.getElementById("naver_id_login");
      el.getElementsByTagName("a")[0].click(); //버튼 누르면 naver_id_login id가진 div도 눌리게
    },
  }
}
</script>

<style scoped>
.decoration-none {
  color: #000;
  font-size: 22px;
  font-family: dream;
  text-decoration : none !important; 
}
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
  background-color:#1EC800;
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
  margin-top:20px;
  font-size:18px;
  font-weight:700;
  color:#616161;
}
.text-link1:hover{
  color:black;
  cursor: pointer;
}
</style>