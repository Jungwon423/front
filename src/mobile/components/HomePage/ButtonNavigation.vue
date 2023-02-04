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
        <div
          class="cursor"
        >
          <v-avatar
            color="#D7CCC8"
            size="130"
            class="rounded-pill"
          >
            <v-img
              :src="cate.src"
              width="70"
              height="70"
            />
          </v-avatar>
          <div
            class="imgText"
            v-text="cate.title"
          />
        </div>
      </v-col>
    </v-row>
  </div>
</template>
  
  <script>
  
  export default {
    components: {
    },
    data() {  
      return {
        category: [
          {
            value: 'profile',
            title: '내 프로필',
            src: require('@/assets/mdi/account.svg'),
          },
          {
            value: 'wishlist',
            title: '내 찜',
            src: require('@/assets/mdi/heart.svg'),
          },
          {
            value: 'about',
            title: 'About',
            src: require('@/assets/mdi/information.svg'),
          },
        ],
      }
    },
    methods:{
    goProfile() {
      if (!this.logined) {
        this.$router.push('/login')
      }
      else {
        this.$router.push('/profile')
      }
    },
    goWish() {
      if (!this.logined) {
        this.$router.push('/login')
      }
      else {
      this.$router.push('/wish')
      }
    },
    }
  }
  </script>
  
<style>
@import '@/assets/styles/CategoryMain.css';
.cursor {
    cursor: pointer;
}
.imgText{
  margin-top:20px;
  font-size: 35px;
  font-family: "dream";
  color : black;
  text-align: center;
}
</style>
      