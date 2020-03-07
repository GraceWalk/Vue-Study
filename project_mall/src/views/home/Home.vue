<template>
  <div class="home">
    <nav-bar><span slot="center">首页</span></nav-bar>
    <swiper class="home-swiper" v-if="banners.length">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>  
  import { getMultiData } from 'network/home'

  import NavBar from 'components/common/navbar/NavBar'
  import { Swiper, SwiperItem } from 'components/common/swiper'

  export default {
    name: 'Home',
    data() {
      return {
        banners: []
      }
    },
    components: {
      NavBar,
      Swiper,
      SwiperItem
    },
    created() {
      getMultiData().then(res => this.banners = res.data.data.banner.list)
    }
  }
</script>

<style scoped>
.home {
  width: 100vw;
}
.home-swiper {
  width: 100vw;
  margin-top: 44px;
}

</style>