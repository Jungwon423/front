<template>
  <div class="comment-container2">
    <div class="comment-wrapper1">
      <span class="text-wrapper">
        <input type="checkbox">
      </span>
      <span class="text-wrapper">
        12130131
      </span>
    </div>
    <div class="comment-wrapper2">
      <div class="text-wrapper1">
        안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.안녕하세요 제품이 끝내주네요.
      </div>
    </div>
    <div class="comment-wrapper3">
      <div class="text-wrapper2">
        20230203
      </div>
    </div>
    <div>6</div>
  </div>
</template>
  
<script>
export default {
    name: 'ProfileGood',
    data () {
        return {}
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
  position:relative;
  display: inline-block;
  width:30px;
  left:20%;
}
.text-wrapper1{
  display: inline-block;
  position:relative;
  margin-left:10px;
  font-weight:500;
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