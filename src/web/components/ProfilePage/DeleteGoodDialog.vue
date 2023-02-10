<template>
  <v-row>
    <v-col>
      <div class="card01">
        <div class="card-title"> 
          X
        </div>
                
        <div class="pa-10 card-content">
          상품을 추천 목록에서 삭제하시겠습니까?
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
            @click="deleteGood();"
          >
            확인
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
    
<script>
import jwtAxios from '@/library/jwtAxios'
export default {
    props: {
      name : {
        type: String,
        default: '',
      },
    },
    emits: ['close'],
    methods: {
    closeDialog() {
        this.dialog = false
        this.$emit("close", false)  
    },
    deleteWish() {
      console.log('/product/wishlist?productId=' + encodeURIComponent(this.name), { wish: "unwish"})
      jwtAxios.post('/product/wishlist?productId=' + encodeURIComponent(this.name),
      { wish: "unwish"})
      .then((res) => {
        console.log(res.data['wishList'])
        this.$store.commit('Wish/SET_WISHLIST', res.data["wishList"]) 
      })
    },
    deleteGood() {
      jwtAxios.post('/product/recommend?productId=' + encodeURIComponent(this.name))
      .then((res) => {
        console.log(res.data['recommends'])
        this.$store.commit('Profile/SET_RECOMMENDS', res.data["recommends"]) 
      })
    }
    }
  }
  </script>
  
  <style scoped>
  .card01{
      height:200px;
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
      height:130px;
      font-size:20px;
      width:400px;
  }
  .card-btn1{
      margin-left:10%;
      height:40px;
      font-size:20px;
      color:white;
      width:150px;
  }
  .card-btn2{
      margin-left:10%;
      height:40px;
      font-size:20px;
      color:white;
      width:150px;
  }
  </style>