<template>
  <div>
    <h2>用户名称: {{ userId }}</h2>
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      return this.$route.params.userId
    }
  }
}
</script>