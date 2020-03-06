<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="rght"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar'
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 44px;
    background: linear-gradient(127deg,#ff607d, #ff7c94);
    line-height: 44px;
    text-align: center;
    color: white;
  }
  .left .right {
    width: 60px;
  }
  .center {
    flex: 1;
  }
</style>