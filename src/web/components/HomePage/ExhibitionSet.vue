<template>
  <div>
    <v-row
      class="px-6 text-center"
      justify="center"
    >
      <v-col>
        <div class="best-text">
          기획전
        </div>
      </v-col>
    </v-row> 
    <v-row
      justify="center"
    >
      <v-col>
        <product-container />
      </v-col>
      <v-col>
        <product-container />
      </v-col>
      <v-col>
        <product-container />
      </v-col>
      <v-col>
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
}
</script>

<style scoped>
.best-text {
  position: relative;
  font-family: Poppins;
  font-size: 30px;
  font-weight: 800;
}
.set-group{
  position: relative;
  left : 5%;
}
</style>