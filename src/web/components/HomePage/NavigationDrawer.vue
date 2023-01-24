<template>
  <div
    class="navigation-box"
    @click.stop="drawer = !drawer"
  >
    <v-img
      src="/play/line3.svg"
      alt="img002"
      height="30px"
      class="cate-img"
    />
    <span class="category-text px-10">
      카테고리
    </span>
  </div>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    width="355"
  >
    <div
      class="pa-5"
      style="text-align:start; font-size:20px; font-weight:600"
    >
      Menu 
      <span
        style="float:right; cursor: pointer;"
        @click.stop="drawer = !drawer"
      >
        <v-icon>mdi-alpha-x</v-icon>
      </span>
    </div>
    <hr class="hr-line10">
  
    <div class="navigate-list">
      <div class="navigate-title pa-2">
        카테고리
      </div>
      <div
        v-for="item in items" 
        :key="item.title"
        class="navigate-content"
      >
        <div class="icon-wrapper">
          <v-img
            :src="item.src"
          />
        </div>
        <span class="px-3">
          {{ item.title }}
        </span>
      </div>
    </div>
    <hr class="hr-line10">
    <div class="navigate-list">
      <div class="navigate-title pa-2">
        브랜드
      </div>
      <div
        v-for="brand in brands" 
        :key="brand.title"
        class="navigate-content"
      >
        <div class="icon-wrapper">
          <v-img
            :src="brand.src"
          />
        </div>

        <span class="px-3">
          {{ brand.title }}
        </span>
      </div>
    </div>

    <!--  
    <v-list
      dense
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list color="transparent">
          <v-list-item
            :prepend-icon="item.icon"
            :title="item.title"
          />
        </v-list>
      </v-list-item>
    </v-list>
    -->
  </v-navigation-drawer>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: '생활/건강', src: require('@/assets/drawerIcon/건강.png') },
          { title: '스포츠/레저',src: require('@/assets/drawerIcon/스포츠.png') },
          { title: '식품', src: require('@/assets/drawerIcon/식품.png') },
          { title: '가구/인테리어', src: require('@/assets/drawerIcon/가구.png') },
          { title: '디지털/가전', src: require('@/assets/drawerIcon/디지털.png')},
          { title: '화장품/미용', src: require('@/assets/drawerIcon/미용.png')},
          { title: '출산/육아', src: require('@/assets/drawerIcon/육아.png')},
          { title: '패션 잡화', src: require('@/assets/drawerIcon/패션잡화.png') },
          { title: '패션 의류', src: require('@/assets/drawerIcon/패션의류.png') },
          { title: '면세점', src: require('@/assets/drawerIcon/면세.png') },
          { title: '여행/문화', src: require('@/assets/drawerIcon/문화.png') },
        ],
        brands:[
          { title: 'Amazon', src: require('@/assets/drawerIcon/amazon.png')},
          { title: 'eBay', src: require('@/assets/drawerIcon/ebay.svg') },
          { title: 'AliExpress', src: require('@/assets/drawerIcon/aliExpress.png') },
          { title: 'LTK', src: require('@/assets/drawerIcon/ltk.png') },
        ]
      }
    },
  }
</script>
<style scoped>
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{
  border-style:solid;
}
.cate-img{
  padding-left:150px;
  position:absolute;
  margin-top:7px;
  cursor: pointer;
}
.category-text{
  margin-left:70px;
  position:relative;
  top:10%;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  cursor: pointer;
}
.hr-line10{
  border-color:#F5F5F5;
  border-width:5px;
  border-style:solid;
}
.navigate-list{
  padding-bottom:5px;
  padding-left:10px;
}
.navigate-title{
  margin-top:5px;
  height: 40px;
  display: flex;
  position: static;
  font-size:17px;
  font-weight:700;
  align-items: flex-start;
}
.navigate-content{
  height: 40px;
  display: flex;
  position:relative;
  padding-left:10px;
  font-weight:400;
  background-color:white;
  line-height:40px;
  cursor: pointer;
}
.navigate-content:hover{
  background-color:#F5F5F5;
}
.icon-group{
  margin-top: 9px;
}
.icon-wrapper{
  margin-top:10px;
  width:20px;
  height:20px;
}
</style>