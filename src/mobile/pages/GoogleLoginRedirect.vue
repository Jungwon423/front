<template>
  <div />
</template>
  
<script>
import axios from 'axios'
export default {
created () {
  // 백엔드 서버로 인가 코드 전달
  axios.get(process.env.VUE_APP_API_ROOT +'/login/google?code=' + this.$route.query.code)
  .then((res) => {
    this.$store.commit('Login/SET_TOKEN', res.data['token'])
    localStorage.setItem('token', res.data['token'])

    this.$router.push('/')
  })
}
}
</script>