<template>
  <div class="tab-bar">
    <div class="tab-bar-item">首页</div>
    <div class="tab-bar-item">分页</div>
    <div class="tab-bar-item">购物车</div>
    <div class="tab-bar-item">我的</div>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style>
  .tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(231, 231, 231);
    box-shadow: 0 -1px 3px rgba(204, 204, 204, 0.747)
  }
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
  }
</style>