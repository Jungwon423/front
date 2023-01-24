<template>
  <v-dialog v-model="dialog">
    <template #activator="{ attrs }">
      <v-btn
        class="search-btn1"
        v-bind="attrs"
        @click.stop="dialog = true"
      >
        검색
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5">
        검색 기능은 아직 지원하지 않습니다
      </v-card-title>
      <v-card-text>
        검색 기능은 아직 지원하지 않습니다
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          확인
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="dialog = false"
        >
          닫기
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

<style scoped>
.search-btn1{
  display:flex;
  height:auto;
  width:100px;
  margin-left:50px;
  border-color:#6D4C41;
  border-radius:0px 9px 9px 0px;
  background-color:#8D6E63;
  border-width:1px;
  color:white;
}
</style>