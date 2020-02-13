<template>
  <div class="header">
    <div class="title-box">
      <img class="logo" src="./img/logo.png" alt="">
      <div class="title">
        <div class="name-box">
          <img src="./img/qut.png" alt="" class="qut-img">
          <div class="name">科技发展集团</div>
        </div>
        <div class="english-name">SCI-TECH DEVELOPMENT GROUP OF QINGDAO UNIVERSITY OF TECHNOLOGY</div>
      </div>
    </div>
    <img src="./img/OA.png" alt="" class="oa">
    <img src="./img/wechat.png" alt="" class="wechat">
    <div class="navigation-bar">
      <router-link to="/">集团首页</router-link>
      <router-link to="/introduce">集团总览</router-link>
      <router-link to="/partyBuilding">党建基地</router-link>
      <router-link to="/organization">组织机构</router-link>
      <div>业务范围</div>
      <div>资质成果</div>
      <div>公共服务</div>
      <div>联系我们</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style>
  .header {
    position: relative;
    width: 100%;
    height: 145px;
  }
  .header .title-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 535px;
    height: 86px;
  }
  .header .title-box .logo {
    width: 86px;
    height: 86px;
  }
  .header .title-box .title {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 422px;
    height: 68px;
  }
  .header .title-box .title .name-box {
    display: flex;
    justify-content: space-between;
  }
  .header .title-box .title .name-box .qut-img {
    width: 213px;
  }
  .header .title-box .title .name-box .name {
    font-size: 29px;
    font-weight: 500;
    letter-spacing: 4px;
  }
  .header .title-box .title .english-name {
    font-family: Arial;
    font-size: 10.3px;
    font-weight: 900;
    white-space: nowrap;
  }
  .header .oa {
    position: absolute;
    top: 23px;
    right: 195px;
    cursor: pointer;
  }
  .header .wechat {
    position: absolute;
    top: 23px;
    right: 68px;
    cursor: pointer;
  }
  .header .navigation-bar {
    position: absolute;
    left: 32px;
    bottom: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 988px;
    height: 26px;
  }
  .header .navigation-bar > div,
  .header .navigation-bar > a {
    width: 118px;
    height: 100%;
    background-color: #556688;
    font-size: 16px;
    text-align: center;
    line-height: 26px;
    color: white;
    cursor: pointer;
  }
</style>