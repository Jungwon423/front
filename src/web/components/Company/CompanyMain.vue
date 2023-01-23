<template>
  <v-carousel
    hide-delimiters
    hide-delimiter-background
    :continuous="false"
    cycle
    :show-arrows="false"
    interval="10000"
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      cover
    />
  </v-carousel>
  <div class="text-center carousel-title1">
    <div>
      스마트한 쇼핑 경험을 만나보세요
    </div>
    <div>
      Kagu
    </div>
  </div>
  <div id="page">
    <div class="text-wrapper-group1 pa-2">
      <div class="text-group12 pa-3">
        e-Commerce Eco Sysem
      </div>
      <div class="text-group13 pa-5">
        Kagu는 고객(Customer)와 업체(Provider)를 상품(Product) 중심으로 
        연결해주는 전자 상거래 생태계를 구축하고자 합니다.
      </div>
    </div>
    <div class="company-card1">
      <div>Technology</div>
      <v-img src="@/assets/proExample.png" />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
            src: require('@/assets/상품정보1.png'),
        },
        {
            src: require('@/assets/배경이미지/배경1.jpg'),
        },
        {
            src: require('@/assets/배경이미지/배경2.png'),
        },
        {
            src: require('@/assets/배경이미지/배경3.png'),
        },
      ],
    }
  },
}
</script>
<style scoped>
#page{
  width: 980px;
  margin-left: auto;
  margin-right: auto;
}
.carousel-title1{
color:white;
font-size:35px;
position:absolute;
top:30%;
left:30%
}
.text-wrapper-group1{
    display:flex;
}
.text-group12{
    display:inline-block;
    width:50%;
    font-size:32px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.text-group13{
    display:inline-block;
    font-family:"poppin";
    font-size:27px;
}
.company-card1{
    width:300px;
}
</style>