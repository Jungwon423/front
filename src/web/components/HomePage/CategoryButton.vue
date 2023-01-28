<template>
  <div
    class="cursor"
    @click="changeCategory"
  >
    <v-avatar
      :color="color"
      size="60"
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
import axios from 'axios';
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
          default: require('@/assets/categoryImage/computer.png'),
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
      axios.post('http://localhost:8080/api/category/' + this.value + '/click')

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
</style>