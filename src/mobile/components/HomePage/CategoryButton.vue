<template>
  <div
    class="cursor"
    @click="changeCategory"
  >
    <v-avatar
      :color="color"
      size="90"
      class="rounded-xl"
    >
      <v-img
        :src="src"
        :width="imageSize"
        :height="imageSize"
      />
    </v-avatar>
    <div
      class="imgText"
      v-text="title"
    />
  </div>
</template>

<script>
import jwtAxios from '@/jwtAxios';
export default {
  props: {
      value: {
          type: String,
          default: 'life_health'
      },
      color: {
          type: String,
          default: '#C8E6C9'
          
      },
      src: {
          type: String,
          default: require('@/assets/drawerIcon/건강.png'),
      },
      imageSize: {
          type: String,
          default: '40px'
      },
      title: {
          type: String,
          default: '생활/건강'
      },
  },
  methods: {
    changeCategory() {
      jwtAxios.post('/category/' + this.value + '/click')

      this.$router.push({
      name: 'category',
      query: {
        categoryName: this.value,
        marketName: this.$store.state.Category.currentMarket,
        page: 1}},)   
    },
  }
}
</script>

<style scoped>
  @import '@/assets/styles/CategoryMain.css';
.cursor {
  cursor: pointer;
}
.imgText{
  font-size: 19px;
  font-family: "dream";
  color : black;
  text-align: center;
}
</style>