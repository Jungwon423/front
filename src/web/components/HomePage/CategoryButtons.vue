<template>
  <div class="py-11">
    <v-row
      class="px-6 text-center"
      justify="center"
    >
      <v-col
        v-for="cate in category"
        :key="cate.title"
      >
        <category-button 
          :value="cate.value"
          :color="cate.color"
          :src="cate.src"
          :image-size="cate.imageSize"
          :title="cate.title"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CategoryButton from './CategoryButton.vue';

export default {
  components: {
    CategoryButton
  },
  data() {  
    return {
      life_health222: 'life_health',
      category: [
        {
          value: 'life_health',
          title: '생활/건강',
          src: require('@/assets/drawerIcon/건강.png'),
          imageSize: '40px',
          color: '#E6EE9C',
        },
        {
          value: 'sports_leisure',
          title: '스포츠/레저',
          src: require('@/assets/drawerIcon/스포츠.png'),
          imageSize: '40px',
          color: '#D1C4E9',
        },
        {
          value: 'furniture_interior',
          title: '가구/인테리어',
          src: require('@/assets/drawerIcon/가구.png'),
          imageSize: '40px',
          color: '#FFCCBC',
        },
        {
          value: 'food',
          title: '식품',
          src: require('@/assets/drawerIcon/식품.png'),
          imageSize: '40px',
          color: '#F8BBD0',
        },
        {
          value: 'cosmetics_beauty',
          title: '화장품/미용',
          src: require('@/assets/drawerIcon/미용.png'),
          imageSize: '40px',
          color: '#E6EE9C',
        },
        {
          value: 'digital_consumer',
          title: '디지털/가전',
          src: require('@/assets/drawerIcon/디지털.png'),
          imageSize: '40px',
          color: '#D1C4E9',
        },
        {
          value: 'fashion-accessories',
          title: '패션잡화',
          src: require('@/assets/drawerIcon/패션잡화.png'),
          imageSize: '40px',
          color: '#FFCCBC',
        },
        {
          value: 'fashion-clothes',
          title: '패션의류',
          src: require('@/assets/drawerIcon/패션의류.png'),
          imageSize: '30px',
          color: '#F8BBD0',
        },
      ],
    }
  },
}
</script>

<style>
  @import '@/assets/styles/CategoryMain.css';
</style>
    
    