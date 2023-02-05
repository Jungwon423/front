<template>
  <div class="side-box">
    <div class="pa-3 category-ex">
      핫딜
      <span
        class="px-3"
        style="color:grey"
      >></span>
      {{ currentCategory_c }}
    </div>
    <div class="sidebar-sidebar">
      <div class="sidebar-group1">
        <div
          class="sidebar-title pa-2"
        >
          카테고리
          <span><v-icon
            class="px-12 icon1"
            color="black"
            size="xx-large"
          >
            mdi-menu-up
          </v-icon>
          </span>
        </div>
        <div
          v-for="item in categoryNames" 
          :key="item"
          class="sidebar-content"
        >
          <span
            class="sidebar-text"
            @click="changeCategory(item)"
          >
            {{ $categoryMap.get(item) }}
          </span>
        </div>
          
        <div class="sidebar-add" />
      </div>
      <div class="sidebar-group1">
        <div class="sidebar-title pa-2">
          쇼핑몰
          <span><v-icon
            class="px-12 icon1"
            color="black"
            size="xx-large"
          >
            mdi-menu-up
          </v-icon>
          </span>
        </div>

        <div
          v-for="marketName in marketNames"
          :key="marketName"
          class="sidebar-content"
        >
          <label><input
            type="checkbox"
            @click="changeMarket(marketName)"
          > {{ marketName }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import library from '@/library/library'
  export default {
    data() {
      return {
        categoryNames: ["life_health","travel_culture","food",
        "furniture_interior","digital_consumer","cosmetics_beauty","fashion-accessories", "fashion-clothes"],

        marketNames: ["Amazon", "eBay", "AliExpress"],
      }
    },
    computed: {
      currentCategory_c: function () {
        return this.$categoryMap.get(this.$store.state.Category.currentCategory)
      },
    },
    methods: {
      changeCategory(category) {
        this.$router.push({
        name: 'category',
        query: {
          categoryName: category,
          marketName: library.currentMarketToString(this.$store.state.Category.currentMarket),
          page: 1}},)   
      },
      changeMarket(market) {
        changeMarketMap = {
          "Amazon" : false,
          "eBay" : false,
          "AliExpress" : false
        }
        if (library.resetOrNot(this.$store.state.Category.currentMarket)) {
          changeMarketMap[market] = true
        }
        else {
          changeMarketMap = this.$store.state.Category.currentMarket
        }

        this.$router.push({ 
        name: 'category',
        query: {
          categoryName: this.$store.state.Category.currentCategory,
          marketName: library.currentMarketToString(this.$store.state.Category.changeMarketMap),
          page: 1}},)   
      }
    }
  }
</script>

<style scoped>
.category-ex{
  margin-top:10px;
}
.side-box{
  float: left;
}
.sidebar-sidebar {
  width: 240px;
  height: 500px;
  position: relative;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: whitesmoke;
} 
.sidebar-title{
  width: 240px;
  height: 40px;
  display: flex;
  position: static;
  font-size:large;
  align-items: flex-start;
  background-color:white;
  border-style: outset;
  border-width: 2px;
  border-color: #ECEFF1 transparent transparent transparent;
}
.icon1{
    position:absolute;
    align-self: auto;
    left:70%;
}
.sidebar-content{
  width: 240px;
  height: 30px;
  display: flex;
  position:relative;
  padding-left:10px;
  padding-top:5px;
  background-color:white;
}
.sidebar-text{
  cursor: pointer;
  font-size:15px;
  font-weight: 400;
}
.sidebar-add{
    width:240px;
    height:30px;
    display:flex;
    position:relative;
    padding-left:5px;
    padding-top:5px;
    color:#039BE5;
    background-color:white;
}
</style>