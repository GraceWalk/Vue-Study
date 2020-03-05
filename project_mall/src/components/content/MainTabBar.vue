<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img src="~assets/img/tabbar/home.svg" alt="" slot="item-img">
      <img src="~assets/img/tabbar/home_active.svg" alt="" slot="item-img-active">
      <span slot="text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="~assets/img/tabbar/category.svg" alt="" slot="item-img">
      <img src="~assets/img/tabbar/category_active.svg" alt="" slot="item-img-active">
      <span slot="text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="~assets/img/tabbar/cart.svg" alt="" slot="item-img">
      <img src="~assets/img/tabbar/cart_active.svg" alt="" slot="item-img-active">
      <span slot="text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="~assets/img/tabbar/profile.svg" alt="" slot="item-img">
      <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="item-img-active">
      <span slot="text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: 'MainTabBar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>

</style>