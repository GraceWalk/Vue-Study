<template>
    <div class="index-box">
    <div class="switch-bar" id="switch-bar">
      <div id="click" class="box tradition" select-navigation="tradition-industrial">传统产业</div>
      <div id="click" class="select box new" select-navigation="new-industrial">新兴产业</div>
    </div>
    <div id="tradition-industrial" class="tradition-industrial">
      <div class="left-navigation">
        <router-link to="/head-office">
          <img src="./img/project.png" alt="">
          <div class="text">科技发展总公司</div>
        </router-link>
        <router-link to="/arch">
          <img src="./img/arch.png" alt="">
          <div class="text">建筑设计研究院</div>
        </router-link>
        <router-link to="">
          <img src="./img/media-reports.png" alt="">
          <div class="text">建设工程监理咨询公司</div>
        </router-link>
        <router-link to="/xueyuan-hotel">
          <img src="./img/xueyuan-icon.png" alt="">
          <div class="text">学苑宾馆</div>
        </router-link>
        <router-link to="/appraisal">
          <img src="./img/appraisal.png" alt="">
          <div class="text">工程质量检测鉴定中心</div>
        </router-link>
        <router-link to="">
          <img src="./img/cultivate-center.png" alt="">
          <div class="text">培训中心</div>
        </router-link>
      </div>
    </div>
    <div id="new-industrial" class="new-industrial">
      <div class="left-navigation">
        <router-link to="soild-waste">
          <img src="./img/new-solid-waste-technology.png" alt="">
          <div class="text">固废综合利用研究院</div>
        </router-link>
        <router-link to="zhongchuang-park">
          <img src="./img/kefa-culture.png" alt="">
          <div class="text">众创园</div>
        </router-link>
        <router-link to="/information-center">
          <img src="./img/big-data-center.png" alt="">
          <div class="text">信息可视与智慧化研究中心</div>
        </router-link>
        <router-link to="/achievement">
          <img src="./img/enviroment.png" alt="">
          <div class="text">成果转化中心</div>
        </router-link>
        <router-link to="city-building-cloud">
          <img src="./img/city-building-cloud.png" alt="">
          <div class="text">城市建筑云</div>
        </router-link>
        <router-link to="">
          <img src="./img/research-news.png" alt="">
          <div class="text">科研动态</div>
        </router-link>
      </div>
    </div>
    <div class="more">
        <div class="text">more</div>
        <div class="circle"></div>
        <div class="circle"></div>
        <img src="./img/more.png" alt="">
    </div>
    <div class="introduction">
        <div class="text">科技引领</div>
        <div class="text">担当作为</div>
        <div class="text">共谋发展</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>