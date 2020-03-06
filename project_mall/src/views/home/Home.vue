<template>
  <div>
    <nav-bar><span slot="center">首页</span></nav-bar>
  </div>
</template>

<script>  
  import { getMultiData } from 'network/home'

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'Home',
    components: {
      NavBar
    },
    created() {
      getMultiData().then(res => console.log(res))
    }
  }
</script>

<style>

</style>