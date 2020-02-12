<template>
  <div>
    <p>我是标题</p>
    <p>内容: {{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'Cpn',
  data() {
    return  {
      message: 'HELLO'
    }
  }
}
</script>