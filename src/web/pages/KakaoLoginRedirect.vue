<template>
  <div>카카오 로그인 성공!</div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    axios.get('http://localhost:8080/api/login/kakao?code=' + this.$route.query.code)
    .then(function (res) {
      console.log(res)
    })
  }
}
</script>