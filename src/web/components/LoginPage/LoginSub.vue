<template>
  <v-btn
    class="brand1-btn-wrapper"
  >
    <v-img
      src="@/assets/카카오로고.png"
      class="brand-btn"
    />
    <span
      class="px-10"
      style="font-size:14px; font-weight:600;"
    > 카카오로 계속하기</span>
  </v-btn>

  <v-btn
    class="brand2-btn-wrapper"
  >
    <v-img
      src="@/assets/네이버로고.png"
      class="brand-btn"
      width="40px"
    />
    <span
      class="px-12"
      style="font-size:14px; font-weight:600;"
    >네이버로 계속하기</span>
  </v-btn>
  <v-col>
    <div class="text-link1">
      비밀번호 찾기
    </div>
    <div
      class="py-2 text-link1"
      @click="goRegister()"
    >
      계정 생성하기
    </div>
  </v-col>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    goRegister() {
        this.$router.push('/register')
    },
}
}
</script>

<style scoped>
.brand1-btn-wrapper{
  margin-top:20px;
  margin-left:12px;
  height:50px;
  width:350px;
  background-color:#F0E555;
}
.brand2-btn-wrapper{
  margin-top:20px;
  margin-left:12px;
  height:50px;
  width:350px;
  background-color:#82D849;
  color:white;
}
.brand-btn{
  width:50px;
  height:50px;
}
.text-link1{
  font-size:medium;
  font-weight:700;
  color:#616161;
}
.text-link1:hover{
  color:black;
  cursor: pointer;
}
</style>