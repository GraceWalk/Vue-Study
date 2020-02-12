<template>
  <div>
    <h2>用户名称: {{ userId }}</h2>
    <router-link :to="'/user/' + userId + '/news'">新闻</router-link>
    <router-link :to="'/user/' + userId + '/flags'">flag</router-link>
    <router-view></router-view>
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