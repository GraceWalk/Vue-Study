<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#db639b">
        <img slot="item-img" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-img-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#db639b">
        <img slot="item-img" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-img-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#db639b">
        <img slot="item-img" src="./assets/img/tabbar/cart.svg" alt="">
        <img slot="item-img-active" src="./assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#db639b">
        <img slot="item-img" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-img-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from './components/tabbar/TabBar'
  import TabBarItem from './components/tabbar/TabBarItem'

  export default {
    name: 'App',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import url('./assets/css/base.css');
</style>