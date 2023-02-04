<template>
  <div>
    <div
      style="cursor:pointer;"
      class="decoration-none text-center simple"
      @click="goHomePage"
    >
      <navigation-drawer />
      <span class="header-title">
        Kagu
      </span>
    </div>
  </div>
  <hr class="h-line1">
</template>
<script>
import NavigationDrawer from './NavigationDrawer.vue'
export default {
    name: 'HomeHeader',
    components: {
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
    }
  }
</script>
<style scoped>
.simple{
    height:170px;
}
.header-title{
    position:relative;
    top:3%;
    font-size:80px; 
    color:#6D4C41;
}
</style>