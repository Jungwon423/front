<template>
  <div id="bg">
    <v-row
      justify="center"
      class="pa-12"
    >
      <div
        class="login-box"
      >
        <form @submit.prevent="fnLogin">
          <v-col>
            <div class="login-title text-center">
              회원가입
            </div>
          </v-col>
          <v-col>
            <label class="login-label">Name</label>
            <div class="login-bar-wrapper">
              <input
                type="text"
                name="id"
                placeholder="이름"
                class="login-bar"
              >
            </div>
          </v-col>
          <v-col>
            <label class="login-label">Nickname</label>
            <div class="login-bar-wrapper">
              <input
                type="text"
                name="id"
                placeholder="닉네임"
                class="login-bar"
              >
            </div>
          </v-col>
          <v-col>
            <label class="login-label">PhoneNumber</label>
            <div class="login-bar-wrapper">
              <input
                name="phone"
                placeholder="010-xxxx-xxxx"
                class="login-bar"
                type="text"
                autocomplete="on"
              >
            </div>
          </v-col>
          <v-col>
            <label class="login-label">Email</label>
            <div class="login-bar-wrapper">
              <input
                name="email"
                placeholder="babo@aaa.com"
                class="login-bar"
                type="text"
                autocomplete="on"
              >
            </div>
          </v-col>
          <v-col>
            <label class="login-label">ID</label>
            <div class="login-bar-wrapper">
              <input
                v-model="user_id"
                type="text"
                name="id"
                placeholder="아이디"
                class="login-bar"
              >
            </div>
          </v-col>
          <v-col>
            <label class="login-label">Password</label>
            <div class="login-bar-wrapper">
              <input
                v-model="user_pw"
                name="password"
                placeholder="8-20자리의 비밀번호를 입력하세요."
                class="login-bar"
                type="password"
                autocomplete="on"
              >
            </div>
          </v-col>
          <v-col>
            <label class="login-label">Repeat Password</label>
            <div class="login-bar-wrapper">
              <input
                name="password"
                placeholder="비밀번호를 다시 입력하세요."
                class="login-bar"
                type="password"
                autocomplete="on"
              >
            </div>
          </v-col>
        </form>
        <div class="text-center">
          <v-btn
            type="submit"
            class="login-btn"
          >
            회원가입
          </v-btn>
        </div>
      </div>
    </v-row>
  </div>
</template>
<script>
export default {
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
    }
  }
</script>
<style scoped>
#bg{
    background-color:#F5F5F5;
}
.login-title{
    font-size:25px;
    font-weight: 600;
}
.login-box{
    margin-top:150px;
    display: block;
    width:500px;
    height:900px;
    background-color: white;
}
#loginForm {
    width: 600px;
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
    height:40px;
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
.login-label{
    font-size:20px;
    font-weight:500;
    position:relative;
    left:15%;
}
</style>