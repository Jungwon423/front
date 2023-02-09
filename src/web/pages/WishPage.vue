<template>
  <div class="width-980">
    <WishHeader />
    <div class="width-980">
      <WishContainer 
        v-for="wish in wishList"
        :key="wish"
        :name="wish.name"
        :price="wish.price"
        :image-url="wish.imageUrl"
        :market-name="wish.marketName"
        :click-count="wish.clickCount"
        :naver-price="wish.naverPrice"
        :rating="wish.rating"
        :comment-count="wish.commentCount"
        :link="wish.link"
      />
    </div>
    <WishEmpty
      v-if="wishList.length == 0"
    />
  </div>
</template>
      
<script>
import WishHeader from '@/web/components/WishPage/WishHeader.vue';
import WishContainer from '../components/WishPage/WishContainer.vue';
import WishEmpty from '@/web/components/WishPage/WishEmpty.vue';
import jwtAxios from '@/library/jwtAxios'

export default {
  name: 'WishPage',
  components : {
    WishHeader,
    WishContainer,
    WishEmpty,
  },
  computed: {
    wishList: function() {
      return this.$store.state.Wish.wishList
    }
  },
  created() {
    jwtAxios.get('user/wishlist')
    .then((res) => {
      this.$store.commit('Wish/SET_WISHLIST', res.data["result"] == null ? [] : res.data["result"])
    })

  }
}
</script>

<style scoped>
</style>