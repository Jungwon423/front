<template>
  <div
    class="navigation-box"
    @click.stop="drawer = !drawer"
  >
    <div class="btn-text">
      브랜드
    </div>
    <span>
      <v-icon
        class="icon1"
        color="black"
        size="xx-large"
      >
        mdi-chevron-down
      </v-icon>
    </span>
  </div>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="bottom"
    width="980"
    class="navi-drawer pa-10"
  >
    <span
      style="float:right; cursor: pointer; font-size:50px"
      @click.stop="drawer = !drawer"
    >
      X
    </span>
    <div style="font-size:60px;">
      브랜드
    </div>
    <v-row class="text-start">
      <v-col>
        <div
          v-for="item in items" 
          :key="item.title"
          class="brand-content"
          @click="goCategoryPage(item.title)"
        >
          <div
            class="text-center item-wrapper"
            @click="goBrandPage"
          >
            <input
              type="checkbox"
              @click="changeMarket(marketName)"
            >
            <div
              class="item-title"
            >
              {{ item.title }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>
<script>
export default {
    name: 'HomePage',
    data () {
        return {
        drawer: false,
        items: [
        { title: '아마존', src: require('@/assets/drawerIcon/건강.png') },
        { title: '이베이',src: require('@/assets/drawerIcon/스포츠.png') },
        { title: '알리익스프레스', src: require('@/assets/drawerIcon/식품.png') },]
    }
    },
}
</script>
<style scoped>
.navigation-box{
    display:flex;
}
.btn-text{
    position:relative;
    margin-top:6%;
    margin-left:10%;
}
.icon1{
    position:relative;
    margin-top:50%;
    margin-left:0%;
}
.navi-drawer{
    border-style:solid;
    border-width:30px;
    border-radius:200px;
    border-color:white;
}
.item-title{
    margin-left:40px;
    margin-top:60px;
    text-align: left;
  height:100px;
  font-size:40px;
}
.item-wrapper{
    display: flex;
}
.brand-content{
    border-style:solid;
    border-width:2px;
    border-color:#EEEEEE;
  width:450px;
  display: inline-block;
  position:relative;
  padding-left:30px;
  font-weight:500;
  background-color:white;
  line-height:40px;
  cursor: pointer;
}
input[type=checkbox] {
  margin-left:10px;
  transform : scale(5.0);
}
</style>