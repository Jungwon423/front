<template>
  <div @click="changeCategory">
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
        changeCategory: function(evt) {
            console.log(this.value + '를 클릭했습니다')
            this.$store.commit('ProductStore/SET_CURRENTCATEGORY', this.value)
    }
    }
}
</script>

<style scoped>
  @import '@/assets/styles/CategoryMain.css';
</style>