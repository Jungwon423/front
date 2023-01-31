<template>
  <div>구글 로그인 성공!</div>
</template>
  
<script>
import axios from 'axios'
export default {
created () {
  // 백엔드 서버로 인가 코드 전달
  axios.get('http://localhost:8080/api/login/google?code=' + this.$route.query.code)
  .then(function (res) {
    this.$store.commit('Login/SET_TOKEN', res.data['token'])
    localStorage.setItem('token', res.data['token'])

    this.$router.push('/')
  })
}
}
</script>