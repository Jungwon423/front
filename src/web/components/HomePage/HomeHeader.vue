<template>
  <div class="pa-10 flex-titlebar">
    <router-link
      to="/"
      class="decoration-none"
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
    </router-link>
  
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
          @click="goLogin"
        >
          <v-icon
            large
            color="grey"
          >
            mdi-account
          </v-icon>
          <div
            class="py-2"
            style="text-align:center"
          >
            내 프로필
          </div>
        </div>
      </v-col>
      <v-col>
        <div
          class="icon-group2"
          @click="goLogin"
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
      <span class="group1-text px-10">홈</span>
      <span class="group1-text px-10">핫딜</span>
      <span
        class="group1-text px-10"
        @click="goProduct"
      >기획전</span>
      <span
        class="group2-text px-10"
        @click="goLogin"
      >로그인</span>
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
  data () {
      return {
        dialog: false,
      }
    },
  methods: {
    goToHomePage() {
      this.$router.push('/')
    },
    goToCategoryPage() {
      this.$router.push('/category')
    },
    goProduct() {
      this.$router.push('/product')
    },
    goLogin() {
      this.$router.push('/login')
    },
  },
}
</script>

<style scoped>

.decoration-none {
  color: #000;

  font-size: 22px;
  font-family: dream;
  text-decoration : none !important; 
}

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
.cate-img{
  padding-left:150px;
  position:absolute;
  margin-top:7px;
  cursor: pointer;
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
.category-text{
  margin-left:70px;
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
.search-bar-wrapper{
  display: flex;
  border-style:solid;
  border-radius:10px;
  border-color:#6D4C41;
  border-width:1px;
  margin-left:50px;
  width:400px;
}
.search-bar{
  position:relative;
  width:400px;
  left:5%;
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
  cursor: pointer;
}
.icon-group2{
  position:relative;
  left:50%;
  width:100px;
  display:block;
  font-size:small;
  cursor: pointer;
}
</style>