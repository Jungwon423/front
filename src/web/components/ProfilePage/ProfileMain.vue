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
      <change-nickname />
      <div class="default-table">
        <div class="pa-6">
          <div class="default-table-title">
            아이디
          </div><span class="px-6"> {{ nickname }}</span>
          <hr class="h-line3">
          <div class="default-table-title">
            닉네임
          </div><span class="px-6"> {{ nickname }}</span>
          <hr class="h-line3">
          <div class="default-table-title">
            이메일
          </div><span class="px-6"> {{ email ? email : '-' }}</span>
          <hr class="h-line3">
        </div>
      </div>
    </div>
    <comment-list />
    <good-list />
  </div>
</template>

<script>

import jwtAxios from '@/library/jwtAxios'
import ChangeNickname from '@/web/components/ProfilePage/ChangeNickname.vue'
import CommentList from '@/web/components/ProfilePage/CommentList.vue'
import GoodList from '@/web/components/ProfilePage/GoodList.vue'

export default {
  components: {
    ChangeNickname,
    CommentList,
    GoodList,
  },
  computed: {
    id: function() {
      return this.$store.state.Profile.id
    },
    nickname: function() {
      return this.$store.state.Profile.nickname
    },
    email: function() {
      return this.$store.state.Profile.email
    }
  },
  
  async created() {
    
    await jwtAxios.get('/user/profile')
    .then((res) => {
      console.log(res.data)
      // this.$store.commit('Profile/SET_ID', res.data['id'])
      this.$store.commit('Profile/SET_NICKNAME', res.data['nickname'])
      this.$store.commit('Profile/SET_EMAIL', res.data['email'])
      this.$store.commit('Profile/SET_RECOMMENDS', res.data['recommends'])
      this.$store.commit('Profile/SET_COMMENTS', res.data['comments'])
      
      console.log(res.data['nickname'])
      console.log(this.$store.state.Profile.nickname)
      console.log(this.$store.state.Profile.email)
      console.log(this.$store.state.Profile.recommends)
    })
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