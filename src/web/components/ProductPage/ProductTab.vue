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
          <span style="color:grey">
            {{ tabName }}
          </span>
        </v-tab>
      </v-tabs>
    </v-col>
  </v-row>
  <v-window v-model="tab">
    <v-window-item value="Description">
      <div
        class="mx-5 my-3"
        style="font-size:20; font-weight:600"
      >
        상품 정보
      </div>
      <div class="pa-2">
        1. 물품구매(제조)계약 특수조건의 기재사항은 다음과 같다.
        - 제20조 물가변동으로 인한 계약금액 조정방법 : 품목조정률
        - 제22조 단가계약의 경우 1회 최대납품요구금액 100분의 50   

        2. 물품구매계약품질관리 특수조건의 기재사항은 다음과 같다.
        - 제18조 하자보수기간 : 1년

        3 기타사항 
        ○「국가를 당사자로 하는 계약에 관한 법률 시행령」제76조제2항제2호에 따라 아래의 계약 주요 조건을 위반한 경우 ‘부정당업자 입찰참가자격 제한 처분’을 받을 수 있습니다. 다만, 아래의 계약 주요 조건 위반이 국가계약법령 상의 다른 조항에 의한 ‘부정당업자 입찰참가자격 제한 처분’ 사유에 해당하는 경우 해당 조항의 적용을 배제하지 않습니다. 
      </div>
      <div
        v-for="imgDetail in imgDetails"
        :key="imgDetail"
      >
        <v-img
          alt="hi musbi"
          :src="imgDetail.src"
          class="py-2"
        />
      </div>
      <product-review />
    </v-window-item>

    <v-window-item value="Review">
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
    tabNames: ['Description', 'Review', 'About'],
    imgDetails:[
      {
          src: require('@/assets/상품정보1.png')
      },
      {
          src: require('@/assets/상품정보2.png')
      },
    ]
  }
  }
}
</script>
<style scoped>
</style>