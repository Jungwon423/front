<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
    height="500px"
  >
    <template #activator="{ attrs }">
      <v-btn
        class="search-btn1"
        v-bind="attrs"
        @click.stop="dialog = true"
      >
        검색
      </v-btn>
    </template>
    <v-row>
      <v-col>
        <div class="card01">
          <!-- <div class="pa-10 card-title"> 
            죄송...
          </div>-->
          <v-img
            class="card-img"
            src="@/assets/randomImage/음.png"
          />
          
          <div class="pa-10 card-content">
            검색 기능은 아직 지원하지 않습니다.
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
        imageUrl:'',
      }
    },
    /*
    beforeCreate(){
      const ran = Math.floor(Math.random() * 10 + 1);
      console.log(ran)
      const imageUrl = "@/assets/randomImage/배달"+ran+".png";
      this.imageUrl += imageUrl;
    },
    methods : {
      getRandomImage(){
        const ran = Math.floor(Math.random() * 10 + 1);
        console.log(ran)
        const imageUrl = "@/assets/randomImage/배달"+ran+".png";
        this.imageUrl += imageUrl;
      }
    }*/
  }
</script>

<style scoped>
.search-btn1{
  display:flex;
  height:55px;
  width:100px;
  margin-left:20px;
  border-color:#6D4C41;
  border-radius:0px 9px 9px 0px;
  background-color:#8D6E63;
  border-width:1px;
  color:white;
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
.card-img{
  position:relative;
  left:10%;
  width:100px;
  height:100px;
}
.card-footer{
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