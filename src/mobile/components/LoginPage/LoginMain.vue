<template>
  <div>
    <v-row
      justify="center"
      class="text-center"
    >
      <v-col>
        <div class="login-header">
          <div class="login-title">
            Kagu
          </div>
          <div class="login-sub">
            모바일 핫딜 쇼핑
          </div>
        </div>
      </v-col>
      <div
        class="login-box"
      >
        <form @submit.prevent="fnLogin">
          <v-col cols="10">
            <div class="login-bar-wrapper">
              <input
                v-model="id"
                type="text"
                name="id"
                placeholder="아이디"
                class="login-bar"
              >
            </div>
          </v-col>
          <v-col>
            <div class="login-bar-wrapper">
              <input
                v-model="password"
                name="password"
                placeholder="비밀번호"
                class="login-bar"
                type="password"
                autocomplete="on"
              >
            </div>
          </v-col>
          <div class="keep-login">
            <input
              type="checkbox"
              value="login"
            > 
            <span
              class="mx-5"
              style="font-size:17px;"
            >로그인 상태 유지</span>
          </div>
          <v-btn
            type="submit"
            class="login-btn"
            @click="loginSubmit()"
          >
            로그인
          </v-btn>
        </form>
        <hr class="h-line1">
        <LoginSub />
      </div>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
import LoginSub from '@/mobile/components/LoginPage/LoginSub.vue';
export default {
  components : {
    LoginSub,
  },
  data() {
    return {
      id: '',
      password: ''
    }
  },
  computed: {

  },
  methods: {
    goRegister() {
        this.$router.push('/register')
      },
    loginSubmit() {
      let saveData = {};
      saveData.id = this.id;
      saveData.password = this.password;

      try {
        axios.post(process.env.VUE_APP_API_ROOT + "/user/login", JSON.stringify(saveData), {
            headers: {
              "Content-Type": `application/json`,
            },
          })
          .then((res) => {
            if (res.status === 200) {
              // 로그인 성공시 처리해줘야할 부분
              this.$store.commit('Login/SET_TOKEN', res.data['token'])
              localStorage.setItem('token', res.data['token'])
              this.$router.push("/");
            }
          });
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>
<style scoped>
.login-header{
  height:70px;
}
.login-sub{
  margin-left:120px;
  font-size:17px;
  color:#6D4C41;
  font-weight: 500;
}
.login-title{
  width:500px;
  margin-top:50px;
  font-size:30px;
  color:#6D4C41;
  font-weight: 600;
}
.login-box{
  margin-top:0px;
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
  width:450px;
  height:80px;
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
  width:450px;
  height:80px;
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
  height:80px;
  width:450px;
  margin-top:20px;
  margin-left:80px;
  background-color:#8D6E63;
  border-width:1px;
  font-size:24px;
  color:white;
}
.keep-login{
  position:relative;
  left:-14%;
}
.h-line1{
    margin-top:50px;
    margin-left:50px;
    border-left: solid;
    border-width:4px;
    border-color:#EEEEEE;
    width:500px;
}
input[type=checkbox] {
  margin-left:10px;
  transform : scale(2.0);
}
</style>