<template>
  <div id="bg">
    <v-row
      justify="center"
      class="pa-12 text-center"
    >
      <div
        class="login-box"
      >
        <form @submit.prevent="fnLogin">
          <v-col>
            <div class="login-title">
              로그인
            </div>
          </v-col>
          <v-col cols="10">
            <div class="login-bar-wrapper">
              <input
                v-model="user_id"
                type="text"
                name="id"
                placeholder="아이디"
                class="login-bar"
                label="id"
              >
            </div>
          </v-col>
          <v-col>
            <div class="login-bar-wrapper">
              <input
                v-model="user_pw"
                name="password"
                placeholder="비밀번호"
                class="login-bar"
                type="password"
                autocomplete="on"
              >
            </div>
          </v-col>
        </form>
        <div class="keep-login">
          <input
            type="checkbox"
            value="ebay"
          > 로그인 상태 유지
        </div>
        <v-btn
          type="submit"
          class="login-btn"
        >
          로그인
        </v-btn>
        <hr class="h-line1">
        <LoginSub />
      </div>
    </v-row>
  </div>
</template>
<script>
import LoginSub from '@/web/components/LoginPage/LoginSub.vue';
export default {
  components : {
    LoginSub,
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
  height:1050px;
}
.login-title{
  font-size:25px;
  font-weight: 600;
}
.login-box{
  margin-top:150px;
  display: block;
  width:500px;
  height:700px;
  background-color: white;
}
#loginForm {
  width: 500px;
  margin: auto;
}
.login-bar-wrapper{
  display: flex;
  border-style:solid;
  border-radius:6px;
  border-color:transparent;
  margin-left:70px;
  background-color: #F5F5F5;
  width:350px;
}
.login-bar-wrapper:hover{
  border-radius:6px;
  border-color:transparent;
  background-color: #E0E0E0;
}
.login-bar-wrapper:focus{
  border-color:black;
  border-width:2px;
  background-color: white;
}
.login-bar{
  position:relative;
  width:350px;
  height:60px;
  font-size:20px;
  text-align:left;
}
.login-bar:hover{
  cursor: pointer;
}
input::placeholder {
  color: #616161;
  position:relative;
  left:20px;
  font-size:20px;
}
.login-btn{
  height:50px;
  width:350px;
  margin-top:20px;
  margin-left:15px;
  background-color:#8D6E63;
  border-width:1px;
  color:white;
}
.keep-login{
    position:relative;
    left:-19.5%;
}
.h-line1{
    margin-top:50px;
    margin-left:50px;
    border-left: solid;
    border-width:0.5px;
    border-color:#B0BEC5;
    width:400px;
}
</style>