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
</style>