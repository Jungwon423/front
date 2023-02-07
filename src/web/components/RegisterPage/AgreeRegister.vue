<template>
  <div class="wrapper pa-5">
    <div class="terms">
      <span class="terms-color">이용약관</span>
      <span>에 먼저 동의해주세요</span>
    </div>
    <div class="all-agree">
      <span>
        <input
          v-model="allSelected"
          type="checkbox"
          value="all"
        > </span>
      <span class="agree-text">전체동의</span>
    </div>
    <div class="agree-for">
      <div
        v-for="(item, index) in checkList"
        :key="index"
        class="ex-agree"
      >
        <input
          :id="item"
          :key="index"
          v-model="selectList"
          type="checkbox"
          :value="item"
        >
        <label
          :key="index + '1'"
          :for="item"
        > <span class="agree-text2">{{ item }}</span></label>
      </div>
    </div>
    <hr class="h-line13">
    <div
      class="py-3"
      style="font-size:14px; font-weight:500; color:#757575;"
    >
      고객의 동의를 거부할 권리가 있으며 동의를 거부할 경우, 사이트 가입 또는 일부 서비스 이용이 제한됩니다.
    </div>
    <div
      class="btn1"
      @click="goLoginPage"
    >
      <span class="btn-text">처음으로</span>
    </div>
    <div
      class="btn2"
      @click="goRegisterPage"
    >
      <span class="btn-text">다음 단계로</span>
    </div>
  </div>
</template>
  <script>
  export default {
    name: 'AgreeRegister',
      data(){
          return{
              checkList:["G마켓 구매회원 약관 동의(필수)","개인정보 수집 및 이용동의","만 14세 이상입니다.","개인정보 제 3자 제공 동의(선택)","개인정보 수집 및 이용 동의(선택)"],
              checkList2:["e-mail","SMS","test1"],
              selectList:[],
          }
      },
      computed: {
      allSelected: {
        //getter
        get: function() {
          return this.checkList.length === this.selectList.length;
        },
        //setter
        set: function(e) {
          this.selectList = e ? this.checkList : [];
        },
      },
    },
    methods: {
      goLoginPage() {
        this.$router.push('/login')
      },
      goRegisterPage() {
        this.$router.push('/register')
      },
      clickAll(selectAll){
          const checkboxes = document.getElementsByName('agree')
          checkboxes.forEach((checkbox) => {
              checkbox.checked = selectAll.checked;
          })
      }
      },
      
  }
</script>
<style scoped>
.wrapper{
    width:400px;
    margin-left:30%;
}
.terms-color{
    color:#8D6E63;
}
.terms{
    position:relative;
    top:40px;
    height:170px;
    width:200px;
    font-size:27px;
}
.all-agree{
    padding-top:12px;
    padding-left:20px;
    background-color:#F5F5F5;
    border-radius:8px;
    width:330px;
    height:50px;
}
input[type=checkbox] {
margin-left:10px;
transform : scale(2.0);
}
.agree-text{
    margin-left:16px;
    font-weight:600;
}
.agree-text2{
    margin-left:15px;
    font-weight:500;
}
.agree-for{
    margin-top:30px;
}
.ex-agree{
    padding-top:8px;
    padding-left:20px;
    border-radius:8px;
    width:330px;
    height:35px;
}
.h-line13{
    margin-top:50px;
    border-color:#EEEEEE;
    border-width:2px;
    border-style: solid;
}
.btn1{
    margin-top:20px;
    margin-left:10px;
    text-align: center;
    width : 150px;
    height:60px;
    display:inline-block;
    border-color:#BDBDBD;
    border-width:2px;
    border-style: solid;
    border-radius:7px;
}
.btn2{
    margin-left:10px;
    text-align: center;
    width : 150px;
    height:60px;
    display:inline-block;
    border-color:#A1887F;
    color:white;
    background-color:#A1887F;
    border-width:1px;
    border-style: solid;
    border-radius:7px;
}
.btn-text{
    position:relative;
    top:27%;
}
</style>
  