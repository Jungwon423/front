<template>
  <div
    class="navigation-box"
    @click.stop="drawer = !drawer"
  >
    <div class="btn-text">
      카테고리
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
      카테고리
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
            <div
              class="item-title"
              style="font-size:40px;"
            >
              {{ $categoryMap.get(item.title) }}
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
      { title: 'life_health', src: require('@/assets/drawerIcon/건강.png') },
        { title: 'sports_leisure',src: require('@/assets/drawerIcon/스포츠.png') },
        { title: 'food', src: require('@/assets/drawerIcon/식품.png') },
        { title: 'furniture_interior', src: require('@/assets/drawerIcon/가구.png') },
        { title: 'digital_consumer', src: require('@/assets/drawerIcon/디지털.png')},
        { title: 'cosmetics_beauty', src: require('@/assets/drawerIcon/미용.png')},
        { title: 'childbirth_parenting', src: require('@/assets/drawerIcon/육아.png')},
        { title: 'fashion-accessories', src: require('@/assets/drawerIcon/패션잡화.png') },
        { title: 'fashion-clothes', src: require('@/assets/drawerIcon/패션의류.png') },]
    }
  },
  methods: {
  goCategoryPage(category) {
    this.$router.push({
      name: 'category',
      query: {categoryName: category, marketName: "all", page: "1"}},)
    },
  }
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
  margin-top:50px;
  margin-left:50px;
    text-align: left;
  height:100px;
  font-size:40px;
}
.brand-content{
  border-style:solid;
    border-width:2px;
    border-color:#EEEEEE;
  width:450px;
  display: inline-block;
  position:relative;
  font-weight:500;
  background-color:white;
  line-height:40px;
  cursor: pointer;
}
</style>