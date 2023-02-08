<template>
  <v-row class="my-4 text-center">
    <v-col cols="12">
      <div
        style="font-size:30px; font-weight:600;"
        @click="toggleShow"
      >
        브랜드 기획전
      </div>
      <!-- 
      <div
        v-if="show"
        class="py-4"
        style="font-size:17px; font-weight:400;"
      >
        {{ categoryCount }}
        {{ productCount }}
      </div> -->
      <user-container
        v-for="user in userList"
        :id="user.id"
        :key="user.id"
        :product-count="user.productCount"
        :category-count="user.categoryCount"
      />
    </v-col>
  </v-row>
</template>
<script>
import UserContainer from '@/web/components/Admin/UserContainer.vue'
import jwtAxios from '@/library/jwtAxios'
export default {
  name: 'AdminMain',
  components:{
    UserContainer,
  },
  data() {
    return {
      show:false,
    }
  },
  computed: {
    userList: function () {
      console.log(this.$store.state.User.userList)
      return this.$store.state.User.userList
    },
    userCount: function () {
      return this.$store.state.User.userCount
    },
  },
  async created() {
    await this.$store.dispatch('User/FETCH_PRODUCTLIST_API')
  },
  created () {
    jwtAxios.get('/admin/checkAdmin')
    .then((res) => {
      console.log(res.data)
    }),
    jwtAxios.get('/admin/test/detail')
    .then((res) => {
      //this.categoryCount = res.data["categoryCount"]
      //this.productCount= res.data["productCount"]
      console.log(res.data['categoryCount'])
      //console.log(res.data['productCount'])
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