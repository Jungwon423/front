<template>
  <div class="width-980">
    <SearchHeader />
    <SearchMain />
  </div>
</template>
        
  <script>
  import SearchHeader from '@/web/components/SearchPage/SearchHeader.vue';
  import SearchMain from '@/web/components/SearchPage/SearchMain.vue';
  
  export default {
    name: 'SearchPage',
    components : {
      SearchHeader,
      SearchMain,
    },
  }
  </script>
  
  <style scoped>
  </style>