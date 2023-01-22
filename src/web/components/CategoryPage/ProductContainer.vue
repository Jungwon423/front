<template>
  <div class="product-container">
    <img
      class="product-image"
      src="https://i.ebayimg.com/images/g/A5UAAOSwK39hi5H1/s-l300.jpg"
      width="180"
      height="180"
    >
    <span class="product-info">
      <div>Canon Cemra EOS 200D, Black 10x zoom</div>
      <div>
        <span>$998.00</span>
        <span>$1128.00</span>
        <img src="src\assets\Amazon.png">
      </div>
    </span>

    <div class="recommendation">
      추천
    </div>
  </div>
</template>

<style scoped>
.product-container {
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    width: 800px;
    height: 200px;
    border: 1px solid;
    border-radius: 10px;
}
.product-image {
    float: left;
    vertical-align:middle;
}
.product-info {
    /* vertical-align: top; */
}
.recommendation {
    float: right
}
</style>
