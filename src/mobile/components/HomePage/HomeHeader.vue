<template>
  <div>
    <div
      style="cursor:pointer;"
      class="decoration-none text-center"
      @click="goHomePage"
    >
      <navigation-drawer />
      <span style="font-size:80px; color:#6D4C41">
        Kagu
      </span>
    </div>
  
    <div class="search-bar-wrapper text-center">
      <input
        type="text"
        name="hot"
        placeholder="최근 핫딜"
        class="search-bar"
      >
      <not-available-dialog />
      <div class="search-btn">
        <v-img src="@/assets/mdi/magnify.svg" />
      </div>
    <!-- 
    <div class="text-center">
      <v-row
        align-content="center"
      >
        <v-col>
          <not-available-dialog />
        </v-col>
      </v-row>
    </div>
     -->
    </div>
    
    <div>
      <div class="group1">
        <span
          class="group1-text px-10"
          @click="goHomePage"
        >홈</span>
        <span
          class="group1-text px-10"
          @click="goCategoryPage"
        >핫딜</span>
        <span
          class="group1-text px-10"
          @click="goBrandPage"
        >브랜드관</span>
        <span
          class="group2-text px-10"
          @click="goAdmin"
        > {{ logined ? "관리자" : "" }}</span>
      </div>
    </div>
  </div>
  <hr class="h-line2">
</template>

<script>
import NotAvailableDialog from './NotAvailableDialog.vue'
import NavigationDrawer from './NavigationDrawer.vue'

export default {
  name: 'HomeHeader',
  components: {
    NotAvailableDialog,
    NavigationDrawer
  },
  computed: {
    logined () {
      return this.$store.getters['Login/logined']
    }
  },
  methods: {
    goHomePage() {
      if (window.location.pathname == "/") {  //현재 홈페이지 일 경우
        location.reload();
      }
      else{
        this.$router.push('/')
      }
    },
    goCategoryPage() {
      if (window.location.pathname == '/category') {
        location.reload()
      }
      else {
        this.$router.push({
          name: 'category',
          query: {
            categoryName: "life_health", 
            marketName: library.currentMarketToString(this.$store.state.Category.currentMarket),
            page: "1"}},)
      }
    },
    goBrandPage() {
      if (window.location.pathname == '/brand') {
        location.reload()
      }
      else {
        this.$router.push('/brand')
      }
    },
    goProductPage() {
      this.$router.push('/product')
    },
    goLogin() {
      if (!this.logined) {
        this.$router.push('/login')
      }
      else {
        // 로그아웃
        this.$store.commit('Login/LOGOUT')
        localStorage.clear()
        window.location.reload()
      }
    },
    goAdmin() {
      if (this.logined)
        this.$router.push('/admin')
      },
  }
}
</script>
<style>
.h-line1{
  border-color:#EEEEEE;
  border-width:7px;
  border-style: solid;
}
.h-line2{
  border-color:#EEEEEE;
  border-width:3px;
  border-style: solid;
}
</style>
<style scoped>
.group1 {
  display: flex;
  height: 100px;
  margin-top:10px;
  position: relative;
  background-color: transparent;
  text-align: center;
  vertical-align: middle;
}
.group2-text {
  left: 15%;
  position: relative;
  background-color: transparent;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  margin-top:4px;
  cursor: pointer;
}
.group1-text{
  margin-top:20px;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  cursor: pointer;
}
.group2-text{
  margin-top:20px;
  font-family: Poppins;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  cursor: pointer;
}
input::placeholder{
  font-size:40px;
  font-weight:400;
}
.search-bar-wrapper{
  display: flex;
  background-color : #EEEEEE;
  text-align: center;
  margin-top:20px;
  margin-left:50px;
  border-radius:20px;
  width:900px;
  height:100px;
}
.search-bar{
  position:relative;
  width:700px;
  height:100px;
  top:5%;
  left:7%;
}
.search-btn{
  width:70px;
  margin-left:70px;
  margin-top:10px;
}
</style>