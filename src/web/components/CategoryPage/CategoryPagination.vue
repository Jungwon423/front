<template>
  <div class="text-center">
    <v-pagination
      v-model="page_c"
      :length="pageNumber_c"
    />
  </div>
</template>

<script>
  export default {
    computed: {
      page_c: function() {
        return this.$store.state.ProductStore.page_c
      },
      pageNumber_c: function () {
        return this.$store.state.ProductStore.pageNumber_c
      }
    }
  }
</script>

<style>

</style>