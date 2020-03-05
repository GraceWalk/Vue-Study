<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar'
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    height: 49px;
    background-color: #fff;
    border-top: 1px solid rgb(226, 226, 226);
  }
</style>