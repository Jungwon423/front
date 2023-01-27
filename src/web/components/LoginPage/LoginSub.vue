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
  <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=code&client_id=862259299846-ham1sak40i9ampguua9m9mrnqqdonfa8.apps.googleusercontent.com&redirect_uri=http://localhost:8081/google">
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
  
  <div
    id="g_id_onload"
    data-client_id="862259299846-ham1sak40i9ampguua9m9mrnqqdonfa8"
    data-context="signin"
    data-ux_mode="popup"
    data-login_uri="http://localhost:8081/google"
    data-auto_prompt="false"
  />

  <div
    class="g_id_signin"
    data-type="standard"
    data-shape="rectangular"
    data-theme="filled_blue"
    data-text="signin_with"
    data-size="large"
    data-logo_alignment="left"
  />
  
  <div
    id="g_id_onload"
    data-client_id="862259299846-ham1sak40i9ampguua9m9mrnqqdonfa8"
    data-callback="handleCredentialResponse"
  />
  <div
    class="g_id_signin"
    data-type="icon"
    data-shape="circle"
  />
</template>
<script>
export default {
  data() {
    return {
      id: null,
      password: null,
    }
  },
  mounted (){
    const naver_id_login = new window.naver_id_login("g45Um10Zkbqc0tRDbvsW", "http://localhost:8081/naver");
    const state = naver_id_login.getUniqState();
    naver_id_login.setState(state);
    // naver_id_login.setPopup(); // popup 설정을 위한 코드
    naver_id_login.init_naver_id_login();
  },
  methods: {
    loginWithKakao() {
      Kakao.Auth.authorize({
      redirectUri: 'http://localhost:8081/kakao',
      });
    },
    goRegister() {
      this.$router.push('/register')
    },
    goLogin2() {
      this.$router.push('/Login2')
    },
    clickNaver(){
      var el = document.getElementById("naver_id_login");
      //console.log(el);
      el.getElementsByTagName("a")[0].click(); //버튼 누르면 naver_id_login id가진 div도 눌리게
    },
    handleCredentialResponse(response) {
      // decodeJwtResponse() is a custom function defined by you
      // to decode the credential response.
      const responsePayload = parseJwt(response.credential);

      console.log("ID: " + responsePayload.sub);
      console.log('Full Name: ' + responsePayload.name);
      console.log('Given Name: ' + responsePayload.given_name);
      console.log('Family Name: ' + responsePayload.family_name);
      console.log("Image URL: " + responsePayload.picture);
      console.log("Email: " + responsePayload.email); 
    },  
    parseJwt (token) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    },
    /*doLogout() {
      this.$cookie.removeCookie('user-key')
      this.userKey = ''
      this.user = {}
    },*/
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
  font-size:medium;
  font-weight:700;
  color:#616161;
}
.text-link1:hover{
  color:black;
  cursor: pointer;
}
</style>