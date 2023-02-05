<template>
  <v-row class="my-4 text-center">
    <v-col cols="12">
      <div
        style="font-size:30px; font-weight:600;"
        @click="toggleShow"
      >
        브랜드 기획전
      </div>
      <div
        v-if="show"
        class="py-4"
        style="font-size:17px; font-weight:400;"
      >
        해외 탑 브랜드의 세일을 알아보세요
      </div>
    </v-col>
  </v-row>
</template>
<script>
import jwtAxios from '@/library/jwtAxios'
export default {
  name: 'AdminMain',
  data() {
    return {
      show:false,
    }
  },
  created () {
    // 백엔드 서버로 액세스 코드 전달 (implicit)
    jwtAxios.get('/admin/checkAdmin')
    .then((res) => {
      console.log(res.data)
    }),
    jwtAxios.get('/admin/test/detail')
    .then((res) => {
      this.categoryCount = res.data["categoryCount"]
      this.productCount= res.data["productCount"]
      console.log(res.data['categoryCount'])
      console.log(res.data['productCount'])
    })
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