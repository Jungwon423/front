<template>
  <div class="py-12" />
</template>
<script>
export default {
  name: 'HomeHeader',
  data() {
  return {
    links: [
      {title:'Home',src:''},
      {title:'회사소개',src:'company'},
      {title:'이용약관',src:'policy'},
      {title:'로그인',src:'login'},
      ],
    }
  },
  methods: {
    goPage(id){
      this.$router.push('/'+id)
    }
  },
}
</script>
<style scoped>
.footof{
  background-color: white;
}
.footer-text{
  font-size:12px;
}
</style>