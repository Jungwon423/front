<template>
  <div />
</template>
  
<script>
import axios from 'axios'
export default {
  created () {
    const naver_id_login = new window.naver_id_login("g45Um10Zkbqc0tRDbvsW", process.env.VUE_APP_HOME_URL+"/naver");
    // 백엔드 서버로 액세스 코드 전달 (implicit)
    axios.get(process.env.VUE_APP_API_ROOT + '/login/naver?code=' + naver_id_login.getAccessToken())
    .then((res) => {
      this.$store.commit('Login/SET_TOKEN', res.data['token'])
      localStorage.setItem('token', res.data['token'])
      console.log(res.data['token'])

      this.$router.push('/')
    })
  }
}
</script>