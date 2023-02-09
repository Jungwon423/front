<template>
  <v-row>
    <v-col>
      <div class="card01">
        <div class="card-title"> 
          X
        </div>
            
        <div class="pa-10 card-content">
          해당 댓글을 삭제하시겠습니까?
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
            @click="deleteComment();"
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
        id : {
            type: String,
            default: '',
        },
    },
    emits: ['close'],
    methods: {
      goLogin(){
        this.$router.push('/login')
      },
      closeDialog() {
        this.dialog = false
        this.$emit("close", false)  
      },
      deleteComment() {
      jwtAxios.delete('/comment/' + this.id + '/delete')
      .then((res) => {
        console.log(res.data['comments'])
        this.$store.commit('Product/SET_COMMENTS', res.data['comments'])
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