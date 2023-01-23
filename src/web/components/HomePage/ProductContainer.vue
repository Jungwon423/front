<template>
  <div class="card-group1">
    <img
      :src="imgUrl"
      alt="img11"
      height="250"
      width="250"
    >
    <div class="text-group1 px-5">
      <span>{{ productName }}</span>
    </div>
    <span class="px-5 py-3"> 6500원 </span>
    <span class="v-line" />
    <span class="originPrice-group"> 12000원 </span>
    <div>
      <v-rating
        v-model="rating"
        class="px-3"
        value="3.5"
        color="#FFB300"
        empty-icon="mdi-star-outline"
        full-icon="mdi-star"
        half-icon="mdi-star-half"
        half-increments
        readonly
        size="15"
      />

      <span
        style="font-weight: bolder"
      >
        3.5(6504)
      </span>
      <span class="heart-btn">
        <v-icon
          large
        >
          mdi-heart
        </v-icon>
      </span>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ProductContainer',
  props: {

  productName: {
    type: String,
    required: true,
  },

  productPrice: {
    type: Number,
    required: true,
  },
  
  currency: {
    type: String,
    required: true
  },

  discountRate: {
    type: Number,
    required: true,
  },

  imgUrl: {
    type: String,
    required: true,
  },

  categoryName: {
    type: String,
    required: true
  },

  marketName: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },
  
  // tax: {
  //   type: Number,
  //   required: true
  // },

  // shippingFee: {
  //   type: Number,
  //   required: true
  // },

  clickCount: {
    type: Number,
    required: true
  },

  locale: {
    type: String,
    required: true,
  },

  naverPrice: {
    type: Number,
    required: true
  }

  },
  
  data: () => ({ rating: 3 }),
}
</script>

<style scoped>
.card-group1{
  width: 190px;
  height: 450px;
  display: block;
  position: relative;
}
.text-group1{
  width: 220px;
  height: auto;
  display: flex;
}
.originPrice-group{
  text-decoration: line-through;
}
.heart-btn{
  top:6%;
  right:-20%;
  position:absolute;
  width:30px;
  height:10px;
  display:flex;
}
</style>
