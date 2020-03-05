<template>
  <div class="tab-bar-item" @click="turnToPath">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :class="textActive"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: {
        type: String,
        default() {
          return ''
        }
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      textActive() {
        return this.isActive ? 'text-active' : ''
      }
    },
    methods: {
      turnToPath() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 13px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
  .text-active {
    color: rgba(219, 99, 155, 1);
  }
</style>