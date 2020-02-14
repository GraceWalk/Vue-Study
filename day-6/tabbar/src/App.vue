<template>
  <div id="app">
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar'

  export default {
    name: 'App',
    components: {
      TabBar
    }
  }
</script>

<style>
  @import url('./assets/css/base.css');
</style>