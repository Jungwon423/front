<template>
  <v-row>
    <v-col>
      <div class="card01">
        <div
          class="card-title"
          @click="closeDialog"
        > 
          X
        </div>
          
        <div class="pa-10 card-content">
          로그인이 필요한 서비스 입니다. <div>로그인 하시겠습니까?</div>
        </div>
        <v-spacer />
        <div
          class="card-footer"
        >
          <v-spacer />
          <v-btn
            class="card-btn1"
            text
            color="#616161"
            @click="closeDialog"
          >
            취소
          </v-btn>
          <v-btn
            class="card-btn2"
            text
            color="#C62828"
            @click="goLogin();"
          >
            확인
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
emits: ['close'],
  methods: {
    goLogin(){
      this.$router.push('/login')
    },
    closeDialog() {
      this.dialog = false
      this.$emit("close", false)  
    }
  }
}
</script>

<style scoped>
.card01{
  height:250px;
  position:relative;
  background-color:white;
  border-radius:8px;
}
.card-title{
  float:right;
  padding-right:3%;
  font-size:25px;
  font-family: "dohyeon";
}
.card-footer{
  height:80px;
}
.card-content{
  position:relative;
  left:5%;
  top:5%;
  height:170px;
  font-size:20px;
  width:400px;
}
.card-btn1{
  margin-left:10%;
  height:50px;
  font-size:20px;
  color:white;
  width:170px;
}
.card-btn2{
  margin-left:10%;
  height:50px;
  font-size:20px;
  color:white;
  width:170px;
}
</style>