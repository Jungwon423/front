<template>
  <div />
</template>

<script>
import axios from 'axios'
export default {
  created () {
    // 백엔드 서버로 인가 코드 전달
    axios.get(process.env.VUE_APP_API_ROOT + '/login/kakao?code=' + this.$route.query.code)
    .then((res) => {
      this.$store.commit('Login/SET_TOKEN', res.data['token'])
      this.$store.commit('Login/SET_ID', res.data['userid'])

      localStorage.setItem('token', res.data['token'])
      localStorage.setItem('id', res.data['userid'])

      this.$router.push('/')
    })
  }
}
</script>