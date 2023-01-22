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
            v-for="marketname in marketNames"
            :key="marketname"
            :value="marketname"
          >
            {{ marketname }}
          </v-tab>
        </v-tabs>
      </v-col>
    </v-row>
    <v-row
      justify="center"
    >
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        md="4"
        class="pa-0"
      >
        <product-container />
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