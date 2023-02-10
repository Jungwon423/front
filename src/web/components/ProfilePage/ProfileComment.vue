<template>
  <div class="comment-container2">
    <div class="comment-wrapper1">
      <span class="text-wrapper">
        <input
          v-model="check"
          type="checkbox"
          :value="id"
          @click="sendData"
        >
      </span>
      <span class="text-wrapper">
        {{ id }}
      </span>
    </div>
    <div class="comment-wrapper2">
      <div class="text-wrapper1">
        {{ content }}
      </div>
    </div>
    <div class="comment-wrapper3">
      <div class="text-wrapper2">
        {{ timestamp }}
      </div>
    </div>
    <div>{{ goodNumber }}</div>
  </div>
  <div @click="sendData" />
</template>
  
<script>
export default {
  name: 'ProfileGood',
  props: {
    id: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    timestamp: {
      type: String,
      default: ''
    },
    goodNumber: {
      type: Number,
      default: 0
    },
  },
  emits: ['send-data'],
  data () {
    return {
      check:false,
    }
  },
  methods:{
    sendData() { //누를 때 자동으로 데이터 보냄
      this.$emit('send-data',this.id)
    },
  },
}
</script>

<style scoped>

.comment-container2{
  position:relative;
  border: solid;
  border-width:0px 0px 1px 0px;
  border-color:#E0E0E0;
  border-radius: 2px;
  display:flex;
  text-align: start;
  font-size:17px;
  font-weight:400;
  padding-top:8px;
  padding-bottom:8px;
  width:930px;
}
.comment-wrapper1{
  display:inline-block;
  width:200px;
}
.comment-wrapper2{
  display:inline-block;
  width:500px;
}
.comment-wrapper3{
  display:inline-block;
  width:180px;
}
.text-wrapper{
  font-size:10px;
  position:relative;
  display: inline-block;
  width:30px;
  left:10%;
}
.text-wrapper1{
  display: inline-block;
  position:relative;
  margin-left:10px;
  font-weight:400;
  white-space:normal;
  display:-webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow:hidden;
  text-overflow:ellipsis;
}

.text-wrapper2{
  margin-left:20px;
  position:relative;
  display:inline-block;
}
</style>