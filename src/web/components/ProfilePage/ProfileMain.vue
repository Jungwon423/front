<template>
  <div class="width-980">
    <div class="pa-10 profile-title-box">
      <div>
        <span class="py-12 profile-title">
          Kagu 서비스에 표시되는 내 프로필 정보
        </span>
        <span class="py-3 profile-title2">
          개인 정보 및 이를 관리하기 위한 옵션입니다.
        </span>
      </div>    
      <span><v-img
        width="400px"
        src="@/assets/profile/개인정보사진1.png"
      /></span>
    </div>
    <div class="default-info">
      <div class="pa-6 default-title">
        기본 정보
      </div>
      <div class="px-6">
        일부 정보가 다른 이용자에게 표시될 수 있습니다.
      </div>
      <div class="default-table">
        <div class="pa-6">
          <div class="default-table-title">
            닉네임
          </div><span class="px-6"> {{ nickname }}</span>
          <span class="default-mdi"><v-icon
            class="px-12 icon1"
            color="black"
            size="xx-large"
          >
            mdi-arrow-right-bold-box-outline
          </v-icon>
          </span>
          <hr class="h-line3">
          <div class="default-table-title">
            별명
          </div><span class="px-6"> {{ "data-binding X" }}</span>
          <span class="default-mdi"><v-icon
            class="px-12 icon1"
            color="black"
            size="xx-large"
          >
            mdi-arrow-right-bold-box-outline
          </v-icon>
          </span>
        </div>
      </div>
    </div>
    <profile-good />
  </div>
</template>

<script>

import jwtAxios from '@/jwtAxios'
import profileGood from '@/web/components/ProfilePage/ProfileGood.vue'

export default {
  components: {
    profileGood
  },
  data() {
    return {
      nickname: '엔비',
      good: [],
      comment: []
    };
  },
  
  async created() {
    let res = await jwtAxios.get('/user/profile')

    this.nickname = res.data['nickname']
    this.good = res.data['good']
    this.comment = res.data['comment']

    console.log(this.nickname)
    console.log(this.good)
    console.log(this.comment)


  }
};
</script>

<style>
.profile-title-box{
    display:flex;
}
.profile-title{
    display:inline-block;
    font-size:38px;
    font-weight: 600;
    width:400px;
    height:80px;
    line-height: 40px;
}
.profile-title2{
    display:inline-block;
    font-size:20px;
    width:400px;
    height:80px;
    line-height: 40px;
}
.default-info{
    margin-left:40px;
    width:900px;
    height:450px;
    border-style:solid;
    border-width:2px;
    border-color:#E0E0E0;
    border-radius:8px;
    font-size:20px;
    color:#424242;
}
.default-info2{
    margin-left:40px;
    width:900px;
    height:250px;
    border-style:solid;
    border-width:2px;
    border-color:#E0E0E0;
    border-radius:8px;
    font-size:20px;
    color:#424242;
}
.default-title{
    font-size:30px;
    font-weight:600;
}
.default-table{
    display: flex;
}
.default-table-title{
    padding: 10px 20px 20px 20px;
    display: inline-block;
    font-weight:600;
}
.default-table-title2{
    padding: 10px 20px 40px 20px;
    display: inline-block;
    font-weight:600;
}
.default-mdi{
    float:right;
    cursor: pointer;
}
.default-image{
    position:relative;
    top:7%;
    margin-left:100px;
    display:inline-block;
    width:60px;
}
.h-line3{
  border-left: solid;
  border-width:0.5px;
  border-color:#E0E0E0;
  width:850px;
}
</style>