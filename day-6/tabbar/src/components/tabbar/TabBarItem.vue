<template>
  <div class="tab-bar-item" @click="skipPath">
    <div v-if="!isActive"><slot name="item-img"></slot></div>
    <div v-else><slot name="item-img-active"></slot></div>
    <div :style="textStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: String
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      textStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      skipPath() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
</style>