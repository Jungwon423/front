<template>
  <div
    class="pa-10 flex-titlebar"
  >
    <div
      style="cursor:pointer;"
      class="decoration-none"
      @click="goHomePage"
    >
      <v-avatar
        color="white"
        size="56"
      >
        <v-img
          max-height="100"
          max-width="100"
          src="@/assets/kamua.png"
        />
      </v-avatar>

      <span>
        Kagu
      </span>
    </div>
  
    <div class="search-bar-wrapper">
      <input
        type="text"
        name="hot"
        placeholder="최근 핫딜"
        class="search-bar"
      >
      <div class="text-center">
        <v-row
          align-content="center"
        >
          <v-col>
            <not-available-dialog />
          </v-col>
        </v-row>
      </div>
    </div>
    <v-row
      class="text-center"
      justify="center"
    >
      <v-col>
        <div
          class="icon-group1"
          @click="goProfile()"
        >
          <v-icon
            large
            color="grey"
          >
            mdi-account
          </v-icon>
          <div
            class="py-2"
            style="text-align:center;"
          >
            내 프로필
          </div>
        </div>
      </v-col>
      <v-col>
        <div
          class="icon-group2"
          @click="goWish()"
        >
          <v-icon
            large
            color="grey"
          >
            mdi-heart
          </v-icon>
          <div
            class="py-2"
            style="text-align:center"
          >
            나의 찜
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
    
  <div>
    <div class="group1">
      <navigation-drawer />
      <span class="v-line" />
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
        @click="goLogin"
      > {{ logined ? "로그아웃" : "로그인" }}</span>
    </div>
  </div>
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
          query: {categoryName: "life_health", marketName: "all", page: "1"}},)
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
    goProfile() {
      if (!this.logined) {
        this.$router.push('/login')
      }
      else {
        this.$router.push('/profile')
      }
    },
    goWish() {
      if (!this.logined) {
        this.$router.push('/login')
      }
      else {
      this.$router.push('/wish')
      }
    },
  }
}
</script>
<style>
.decoration-none {
  color: #000;
  font-size: 22px;
  font-family: dream;
  text-decoration : none !important; 
}
.width-980{
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.width-1200{
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}
</style>
<style scoped>
.group1 {
  display: flex;
  height: 50px;
  padding:0px;
  position: relative;
  background-color: transparent;
  border-style:solid;
  border-width:1px 0px 1px 0px;
  border-color:#E0E0E0;
  text-align: center;
  vertical-align: middle;
}
.group2-text {
  left: 30%;
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
  margin-top:4px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  cursor: pointer;
}
.v-line{
  margin-top:5px;
  margin-left: 20px;
  border-left: solid;
  border-width:1px;
  border-color:#E0E0E0;
  height:38px;
}
input::placeholder{
  font-size:17px;
  font-weight:400;
}
.search-bar-wrapper{
  display: flex;
  border-style:solid;
  border-radius:10px;
  border-color:#6D4C41;
  border-width:1px;
  margin-left:50px;
  width:500px;
  height:56px;
}
.search-bar{
  position:relative;
  width:380px;
  height:55px;
  left:3%;
}
.flex-titlebar{
  display: flex;
}
.icon-group1{
  position:relative;
  left:100%;
  width:100px;
  display:block;
  font-size:small;
  cursor:pointer;
}
.icon-group2{
  position:relative;
  left:50%;
  width:100px;
  display:block;
  font-size:small;
  cursor:pointer;
}
</style>