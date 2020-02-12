<template>
  <div class="title">
    {{ message }}
    {{ message }}
    <Cpn/>
  </div>
</template>

<script>
import Cpn from './Cpn'

export default {
  name: 'App',
  data(){
    return {
      message: 'hello'
    }
  },
  methods: {},
  components: {
    Cpn
  }
}
</script>

<style scoped>
 .title {
   color: blue
 }
</style>
