<template>
  <div class="good-container">
    <div class="img-wrapper">
      <v-img
        width="180"
        height="180"
        :src="imageUrl"
      />
    </div>
    <div class="good-wrapper1">
      <div class="text-wrapper">
        <span>추천 {{ goodNumber }}</span>
        <span class="mx-2">비추천 {{ badNumber }}</span>
      </div>
      <div class="text-wrapper1">
        {{ name }}
      </div>
    </div>
    <div class="good-wrapper2">
      <div class="text-wrapper2">
        {{ Math.floor(price).toLocaleString('ko-KR') }}원
      </div>
    </div>
    <div class="good-wrapper3">
      <div class="text-wrapper3">
        {{ marketName }}
      </div>
    </div>
    <div class="naver-price">
      <div class="text-wrapper4">
        {{ naverPrice.toLocaleString('ko-KR') }}원
      </div>
    </div>
    <div class="other">
      <div>
        <v-btn>삭제</v-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'ProfileGood',
    components: {
    },
    props: {
      goodNumber: {
        type: Number,
        default: 0
      },
      badNumber: {
        type: Number,
        default: 0
      },
      imageUrl: {
        type: String,
        default: ''
      },
      name: {
        type: String,
        default: ''
      },
      price: {
        type: Number,
        default: 0
      },
      marketName: {
        type: String,
        default: ''
      },
      naverPrice: {
        type: Number,
        default: 0
      }
    },
    data () {
        return {}
    },
}
</script>

<style scoped>
.good-container{
  position:relative;
  border: 1px solid;
  border-width:0.5px;
  border-color:#EEEEEE;
  border-radius: 8px;
  display:flex;
  text-align: start;
  height:230px;
  width:930px;
}
.img-wrapper{
  display:inline-block;
  margin-top:25px;
  width:180px;
}
.good-wrapper1{
  margin-top:30px;
  display:inline-block;
  width:300px;
  height:230px;
}
.good-wrapper2{
  display:inline-block;
  width:180px;
  height:230px;
}
.good-wrapper3{
  display:inline-block;
  width:120px;
  height:230px;
}
.text-wrapper{
  font-size:15px; 
  margin-left:20px;
  color:#616161;
}
.text-wrapper1{
  position:relative;
  top:7%;
  margin-left:20px;
  padding-right:10px;
  font-weight:500;
  font-size:19px;
  white-space:normal;
  display:-webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow:ellipsis;
}
.text-wrapper2{
  margin-top:100px;
  font-size:16px;
  font-weight:500;
  margin-left:20px;
}
.text-wrapper3{
  margin-top:100px;
  font-size:16px;
  font-weight:500;
}
.text-wrapper4{
  margin-top:100px;
  font-size:16px;
  font-weight:500;
}
.naver-price{
  color:#FF1744;
  font-size:17px;
  font-weight:600;
  display:inline-block;
  position:relative;
  left:4%;
}
.other{
  position:relative;
  float:right;
  text-align: end;
  top:80%;
  font-size:14px;
}
</style>