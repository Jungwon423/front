<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
    height="500px"
  >
    <template #activator="{ attrs }">
      <span class="default-mdi"><v-icon
        class="px-12 icon1"
        color="black"
        size="xx-large"
        v-bind="attrs"
        @click.stop="dialog = true"
      >
        mdi-arrow-right-bold-box-outline
      </v-icon>
      </span>
    </template>
    <v-row>
      <v-col>
        <div class="card01">
          <div class="pa-10 card-title"> 
            개인정보 수정
          </div>
            
          <div
            class="mx-10"
            style="margin-top:30px; font-size:18px;"
          >
            닉네임
          </div>
          <div class="mx-10 search-bar-wrapper">
            <input
              type="text"
              name="hot"
              placeholder="건방진 제이미"
              class="search-bar"
            >
          </div>

          <div
            class="mx-10"
            style="margin-top:50px; font-size:18px;"
          >
            전화번호
          </div>
          <div class="mx-10 search-bar-wrapper">
            <input
              type="text"
              name="hot"
              placeholder="010-xxxx-xxxx"
              class="search-bar"
            >
          </div>
          <v-spacer />
          <div
            class="card-footer"
          >
            <v-spacer />
            <v-btn
              class="card-btn"
              color="brown lighten-2"
              text
              @click="dialog = false"
            >
              확인
            </v-btn>
            <v-btn
              class="card-btn"
              color="#BCAAA4"
              text
              @click="dialog = false"
            >
              닫기
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style scoped>
.search-bar-wrapper{
  display: flex;
  border-style:solid;
  border-radius:10px;
  border-color:#6D4C41;
  border-width:1px;
  padding: 10px;
  width:400px;
  height:56px;
}
.search-bar{
  position:relative;
  bottom:30%;
  width:380px;
  height:55px;
}
.card01{
  height:500px;
  position:relative;
  background-color:white;
  border-radius:8px;
}
.card-title{
  line-height: 40px;
  font-size:40px;
  font-family: "dohyeon";
}
.card-footer{
    position:relative;
    top : 25%;
  height:80px;
  background-color: grey;
}
.card-content{
  height:300px;
  font-size:30px;
}
.card-btn{
  height:80px;
  font-size:20px;
  width:250px;
}
</style>
  