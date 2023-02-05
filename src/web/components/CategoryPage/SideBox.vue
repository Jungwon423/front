<template>
  <div class="side-box">
    <div class="pa-3 category-ex">
      핫딜
      <span
        class="px-3"
        style="color:grey"
      >></span>
      {{ currentCategory }}
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

        market : "all"
      }
    },
    computed: {
      currentCategory: function () {
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
        let changeMarketMap = {
          "Amazon" : false,
          "eBay" : false,
          "AliExpress" : false
        }
        // 이미 Amazon eBay AliExpress 모두 true였던 경우 & 전부 다 클릭된 게 아닌 경우 -> changeMarketMap만 갱신해주면 된다
        if (library.resetOrNot(this.$store.state.Category.currentMarket) && !this.$store.state.Category.marketAllChecked ) {
          changeMarketMap[market] = true
        }
        // else if (library.resetOrNot(this.$store.state.Category.currentMarket) && this.$store.state.Category.marketAllChecked) {
        //   changeMarketMap = this.$store.state.Category.currentMarket
        //   changeMarketMap[market] = !changeMarketMap[market]
        // }
        // 둘 다 아닌 경우 클릭된 market만 toggle해주면 된다
        else {
          changeMarketMap = this.$store.state.Category.currentMarket
          changeMarketMap[market] = !changeMarketMap[market]
          if (changeMarketMap["Amazon"] && changeMarketMap["eBay"] && changeMarketMap["AliExpress"]) {
            this.$store.commit('Category/SET_MARKETALLCHECKED', true)
          }
          if (!changeMarketMap["Amazon"] && !changeMarketMap["eBay"] && !changeMarketMap["AliExpress"]) {
            changeMarketMap["Amazon"] = true
            changeMarketMap["eBay"] = true
            changeMarketMap["AliExpress"] = true
          }
        }

        this.$router.push({ 
        name: 'category',
        query: {
          categoryName: this.$store.state.Category.currentCategory,
          marketName: library.currentMarketToString(changeMarketMap),
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