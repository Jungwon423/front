<template>
  <hr class="h-line1">
  <div>
    <v-row
      class="pa-6"
      justify="center"
    >
      <v-col>
        <div class="best-text">
          실시간 BEST
        </div>
      </v-col>
    </v-row> 
    <v-row justify="center">
      <v-col cols="11">
        <v-tabs
          v-model="tab"
          class="market-tab"
          bg-color="transparent"
          color="#64B5F6"
          grow
        >
          <v-tab
            v-for="marketName in marketNames"
            :key="marketName"
            :value="marketName"
            class="market-tab px-5"
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
.h-line1{
  border-color:#D7CCC8;
  border-width:7px;
  border-style: solid;
}
.best-text {
  position: relative;
  font-size: 50px;
  font-weight: 600;
}
.market-tab{
  font-size:30px;
}
</style>