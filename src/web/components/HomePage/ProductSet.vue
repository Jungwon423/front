<template>
  <div>
    <v-row
      class="pa-6 text-center"
      justify="center"
    >
      <v-col>
        <div class="best-text">
          초특가 핫딜
        </div>
      </v-col>
    </v-row> 
    <v-row justify="center">
      <v-col cols="8">
        <v-tabs
          v-model="tab"
          bg-color="transparent"
          color="#64B5F6"
          grow
        >
          <v-tab
            v-for="marketName in marketNames"
            :key="marketName"
            :value="marketName"
            @click="changeMarket(marketName)"
          >
            {{ marketName }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        v-for="product in top3ProductList"
        :key="product"
        cols="12"
        md="4"
        class="pa-0"
      >
        <product-container 
          :name="product.name"
          :price="product.price"
          :currency="product.currency"
          :discount-rate="product.discountRate"
          :image-url="product.imageUrl"
          :category-name="product.categoryName"
          :market-name="product.marketName"
          :link="product.link"
          :tax="product.tax"
          :shipping-fee="product.shippingFee"
          :click-count="product.clickCount"
          :locale="product.locale"
          :naver-price="product.naverPrice"
          :rating="product.rating"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductContainer from '@/web/components/HomePage/ProductContainer.vue'

export default {

  name: 'ProductSet',

  components: {
    ProductContainer
  },

  data() {
    return {
      tab: 'Market',
      marketNames: ['all', 'Amazon', 'AliExpress', 'eBay'],
    }
  },

  computed: {

    // vuex store에서 top3 product list 읽어옴
    top3ProductList: function () {
      return this.$store.state.Home.top3ProductList
    },

    // vuex store에서 current market 읽어옴
    currentMarket: function() {
      return this.$store.state.Home.currentMarket
    }
  },

  watch: {
    currentMarket() {
      this.$store.dispatch('Home/FETCH_TOP3_PRODUCTLIST_API')
    },
  },

  methods: {
    changeMarket: function (marketName) {
      this.$store.commit('Home/SET_CURRENTMARKET', marketName)
    }
  }

}
</script>

<style scoped>
.best-text {
  position: relative;
  font-size: 30px;
  font-weight: 800;
}
.set-group{
  position: relative;
  left : 5%;
}
</style>