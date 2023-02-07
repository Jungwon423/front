<template>
  <v-row>
    <v-col cols="8">
      <v-tabs
        v-model="tab"
        bg-color="transparent"
        grow
        align-tabs="center"
        slider-color="grey"
      >
        <v-tab
          v-for="tabName in tabNames"
          :key="tabName"
          :value="tabName"
          color="#E0E0E0"
        >
          <span style="color:#424242; font-weight:700">
            {{ tabName }}
          </span>
        </v-tab>
      </v-tabs>
    </v-col>
  </v-row>
  <v-window v-model="tab">
    <v-window-item value="상품 이미지">
      <div
        class="mx-5 my-3"
        style="font-size:20; font-weight:600"
      >
        상품 이미지
      </div>
      <div
        v-for="imgDetail in imgDetails"
        :key="imgDetail"
      >
        <v-img
          alt="hi musbi"
          :src="imgDetail"
          class="py-2"
        />
      </div>
      <product-review />
    </v-window-item>

    <v-window-item value="한줄평">
      <product-review />
    </v-window-item>
  </v-window>
</template>
<script>
import ProductReview from '@/web/components/ProductPage/ProductReview.vue'
export default {
  name: 'ProductTab',
  components : {
    ProductReview,
  },

  data() {
    return {
      tab: 'tab',
      tabNames: ['상품 이미지', '한줄평'],
    }
  },

  computed : {
    imgDetails: function() {
      return this.$store.state.Product.subImageUrl
    }
  }
}
</script>
<style scoped>
</style>