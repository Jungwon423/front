<template>
  <div>카카오 로그인 성공!</div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    // 백엔드 서버로 인가 코드 전달
    axios.get('http://localhost:8080/api/login/kakao?code=' + this.$route.query.code)
    .then(function (res) {
      // TODO
      // JWT 받아서 state에 저장
      console.log(res)
    })
  }
}
</script>