<template>
  <div id="bg">
    <v-row
      justify="center"
      class="pa-12 text-center"
    >
      <div
        class="login-box"
      >
        <div class="py-5 login-text-title">
          등록되어 있는 계정으로 간편하게 가입하세요!
        </div>
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
          <div style="font-size:13px; font-weight:600">
            계정이 없으신가요?
          </div>
          <div
            class="py-2 text-link1"
            @click="goRegister()"
          >
            이메일로 가입하기
          </div>
        </v-col>
      </div>
    </v-row>
  </div>
</template>
<script>
export default {
  components : {
  },
  data() {
    return {
      user_id: '',
      user_pw: ''
    }
  },
  methods: {
    fnLogin() {
      if (this.user_id === '') {
        alert('ID를 입력하세요.')
        return
      }

      if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }

      alert('로그인 되었습니다.')
    },
    goRegister() {
        this.$router.push('/register')
      },
  }
}
</script>
<style scoped>
#bg{
  background-color:#F5F5F5;
  height:1000px;
}
.login-text-title{
  margin-top:20px;
  font-size:large;
  font-weight:700;
}
.login-box{
  margin-top:50px;
  display: block;
  width:500px;
  height:400px;
  background-color: white;
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