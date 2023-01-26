<template>
  <div id="bg">
    <v-row
      justify="center"
      class="pa-12"
    >
      <div
        class="login-box"
      >
        <v-form ref="form">
          <v-col>
            <div class="login-title text-center">
              회원가입
            </div>
          </v-col>
          <v-col>
            <label class="login-label">ID</label>
            <div class="login-bar-wrapper">
              <v-text-field
                v-model="id"
                type="text"
                name="id"
                placeholder="아이디"
                class="login-bar"
                :rules="nameRules"
              />
            </div>
          </v-col>
          <v-col>
            <label class="login-label">Password</label>
            <div class="login-bar-wrapper">
              <v-text-field
                v-model="password"
                name="password"
                placeholder="5-20자리의 비밀번호를 입력하세요."
                class="login-bar"
                type="password"
                autocomplete="on"
                :rules="passwordRules"
              />
            </div>
          </v-col>
          <v-col>
            <label class="login-label">Nickname</label>
            <div class="login-bar-wrapper">
              <v-text-field
                v-model="nickname"
                type="text"
                name="nickname"
                placeholder="닉네임"
                class="login-bar"
                :rules="nameRules"
              />
            </div>
          </v-col>
          <v-col>
            <label class="login-label">Email</label>
            <div class="login-bar-wrapper">
              <v-text-field
                v-model="email"
                name="email"
                placeholder="babo@aaa.com"
                class="login-bar"
                type="text"
                autocomplete="on"
                :rules="emailRules"
              />
            </div>
          </v-col>
          <div class="text-center">
            <v-btn
              type="submit"
              class="login-btn"
              @click="signUpSubmit()"
            >
              회원가입
            </v-btn>
          </div>
          <div class="text-center">
            <v-btn
              type="submit"
              class="login-btn2"
              @click="linkToLogin()"
            >
              로그인으로 돌아가기
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-row>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    data: () => ({
        id:"",
        email : "",
        emailRules: [
          v => !!v || '이메일을 작성해주세요',
          v => /.+@.+\..+/.test(v) || '이메일 형식으로 작성해주세요',
      ],
        password : "",
        passwordRules: [
          v => !!v || '비밀번호을 작성해주세요',
          v => (v && v.length >= 5 || v.length <= 20) || '비밀번호는 5글자 이상 20글자 이하로 작성해주세요',
          v => /(?=.*\d)/.test(v) || '숫자를 포함해야합니다',
          //v => /([!@$%])/.test(v) || '특수문자를 포함해야합니다 [!@#$%]'
      ],
        nickname : "",
        nameRules: [
          v => !!v || '닉네임을 작성해주세요',
          v => (v && v.length <= 10) || '닉네임을 10글자를 넘을 수 없습니다.',
      ],
    }),
    methods: {
    signUpSubmit(){
      //const validate = this.$refs.form.validate()
      //if(validate){
      let saveData = {};
      saveData.id= this.id;
      saveData.email = this.email;
      saveData.password = this.password;
      saveData.nickname = this.nickname;

      try {
        axios.post("http://localhost:8080/api/user/register", JSON.stringify(saveData), {
          headers: {
            "Content-Type": `application/json`,
          },
          })
        .then((response) => {
          console.log(response)
          if (response.data.errorCode === 400) {
            alert(response.data.errorMessage)
          }
          else{
            alert("회원가입이 완료되었습니다. 로그인 화면으로 돌아갑니다")
            this.$router.push({path: './login'});
          }
          })
        .catch(error =>{
          console.log(error.response);
        });
      } catch (error) {
        console.error(error);
      }
    },
    linkToLogin(){
      this.$router.push({path:"./login"});
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
  height:800px;
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
  height:50px;
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

.login-btn2{
    height:50px;
    width:350px;
    margin-top:20px;
    margin-left:15px;
    background-color:#616161;
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