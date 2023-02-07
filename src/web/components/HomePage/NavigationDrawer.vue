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
        X
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
        @click="goCategoryPage(item.title)"
      >
        <div class="icon-wrapper">
          <v-img
            :src="item.src"
          />
        </div>
        <span class="px-3">
          {{ $categoryMap.get(item.title) }}
        </span>
      </div>
    </div>
    <hr class="hr-line10">
    <div class="brand-title px-5 py-2">
      브랜드몰
    </div>
    <v-row class="text-start">
      <v-col>
        <div
          v-for="brand in brands" 
          :key="brand.title"
          class="brand-content"
        >
          <div
            class="text-center brand-wrapper"
            @click="goBrandPage"
          >
            <div class="brand-btn">
              <v-img
                :src="brand.src"
              />
            </div>
            <div style="font-size:14px;">
              {{ brand.title }}
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import jwtAxios from '@/library/jwtAxios'
  export default {
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
          { title: 'fashion-clothes', src: require('@/assets/drawerIcon/패션의류.png') },
          // { title: 'duty-free', src: require('@/assets/drawerIcon/면세.png') },
          // { title: 'travel_culture', src: require('@/assets/drawerIcon/문화.png') },
        ],
        brands:[
          { title: 'Gap', src: require('@/assets/brand/gap.svg')},
          { title: 'Horchow', src: require('@/assets/brand/horchow.jpg') },
          { title: 'Macys', src: require('@/assets/brand/macys.webp') },
          { title: 'Oldnavy', src: require('@/assets/brand/oldnavy.webp') },
          { title: 'Wallmart', src: require('@/assets/brand/wallmart.jpeg') },
        ]
      }
    },
    methods: {
      goCategoryPage(category) {
        jwtAxios.post('/category/' + encodeURIComponent(category) + '/click')
        this.$router.push({
          name: 'category',
          query: {categoryName: category, marketName: 'Amazon+eBay+AliExpress', page: "1"}},)
    },
      goBrandPage(){
        this.$router.push('/brand')
      }
    }
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
.icon-wrapper{
  margin-top:10px;
  width:20px;
  height:20px;
}
.brand-title{
  margin-top:5px;
  height: 40px;
  position: static;
  font-size:17px;
  font-weight:700;
  align-items: flex-start;
  text-align: start;
}
.brand-wrapper{
  margin-top:10px;
  width:70px;
  height:70px;
  align-self: center;
}
.brand-content{
  width:100px;
  height: 120px;
  display: inline-block;
  position:relative;
  padding-left:30px;
  font-weight:500;
  background-color:white;
  line-height:40px;
  cursor: pointer;
}
.brand-btn{
  height:50px;
  display:flex;
  align-items: center;
  justify-content:center;
}
</style>