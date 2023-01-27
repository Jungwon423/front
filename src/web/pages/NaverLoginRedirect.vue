<template>
  <div>네이버 로그인 성공!</div>
</template>
  
  <script>
  import axios from 'axios'
  export default {
    created () {
      const naver_id_login = new window.naver_id_login("g45Um10Zkbqc0tRDbvsW", "http://localhost:8081/naver");
      console.log("access token", naver_id_login.getAccessToken());
      // 백엔드 서버로 액세스 코드 전달 (implicit)
      axios.get('http://localhost:8080/api/login/naver?code=' + naver_id_login.getAccessToken())
      .then(function (res) {
        // TODO
        // JWT 받아서 state에 저장
        console.log(res)
      })
    }
  }
  </script>