<template>
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
</template>

<script>
export default {
    components: {}, 
    setup() {}, 
    data() {
        return {
            sampleData: ''
        }
    }, 
    created() {},
    mounted() {}, 
    unmounted() {},
    methods: {}
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