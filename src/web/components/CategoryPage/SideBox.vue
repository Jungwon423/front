<template>
  <div>
    홈 > 가전/전자
  </div>
  <div class="sidebar-sidebar">
    <div class="sidebar-group1">
      <div
        class="sidebar-title pa-2"
      >
        Category 
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
        <span class="sidebar-text">
          {{ item }}
        </span>
      </div>
          
      <div class="sidebar-add">
        See All
      </div>
      <div class="sidebar-add" />
    </div>
    <div class="sidebar-group1">
      <div class="sidebar-title pa-2">
        Brands
        <span><v-icon
          class="px-12 icon1"
          color="black"
          size="xx-large"
        >
          mdi-menu-up
        </v-icon>
        </span>
      </div>

      <div class="sidebar-content">
        <label><input
          type="checkbox"
          value="amazon"
        > Amazon</label>
      </div>
      <div class="sidebar-content">
        <label><input
          type="checkbox"
          value="ebay"
        > <span class="sidebar-text">eBay</span></label>
      </div>
      <div class="sidebar-content">
        <label><input
          type="checkbox"
          value="aliexpress"
        > AliExpress</label>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
    return {
      categoryNames: ['생활/건강','스포츠/레저','식품','가구/인테리어',
      '디지털/가전','화장품/미용','출산/육아','패션 잡화', '패션 의류','면세점',
      '여행/문화'],
    }
  },
  }
</script>
<style scoped>
.sidebar-sidebar {
  width: 240px;
  height: 500px;
  display: block;
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