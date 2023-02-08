<template>
  <v-row class="my-4 text-center">
    <v-col cols="12">
      <div
        style="font-size:30px; font-weight:600;"
        @click="toggleShow"
      >
        브랜드 기획전
      </div>
      <div>{{ id }}</div>
      <div> {{ categoryCount }}</div>
      <div
        v-if="show"
        class="py-4"
        style="font-size:17px; font-weight:400;"
      >
        {{ productCount }}
      </div>
    </v-col>
  </v-row>
</template>
  <script>
  import jwtAxios from '@/library/jwtAxios'
  export default {
  name: 'AdminMain',
  props: {
    id: {
      type: String,
      default: ''
    },
    productCount: {
      type: Object,
      default: ()=> {
        return{
            productName: 0,
            foo: 13,
        }}
    },
    categoryCount: {
      type: Object,
      default: ()=> {
        return{
            categoryName: 0,
            foo: 13,
        }}
    },
},
  data() {
    return {
      show:false,
    }
  },
  methods:{
    toggleShow(){
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>
</style>