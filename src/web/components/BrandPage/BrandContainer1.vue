<template>
  <v-col>
    <button
      @click="openMarket(link)"
    >
      <div class="brand-card1">
        <div class="brand-img">
          <v-img
            :src="brandImage"
          />
        </div>
        <div
          class="pa-5 brand-content"
          v-html="content"
        />
        <div style="font-size:17px; text-align:center; font-weight:700;">
          <a
            class="decoration-none"
          >Shop Now</a>
        </div>
      </div>
    </button>
  </v-col>
</template>

<script>
export default {
    props : {
        link : {
            type : String, required : true
        },
        brandImage : {
            type : String, required : true
        },
        content : {
            type : String, required : true
        }
    },
    methods:{
    openMarket(link) {
      window.open(link)
    },
  }
}
</script>
