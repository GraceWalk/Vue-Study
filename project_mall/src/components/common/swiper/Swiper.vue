<template>
  <div class="swiper-box" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="swiper" ref="swiper"><slot></slot></div>
    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <div class="indi-item" v-for="(item, index) in slideCount" :class="{'active': index === currentIndex - 1}" :key="index"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      interval: {
        type: Number,
        default: 3000
      },
      moveRatio: {
        type: Number,
        default: 0.25
      },
      animDuration: {
        type: Number,
        default: 300
      },
      showIndicator: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        slideCount: 0,
        timerNum: 0,
        totalWidth: 0,
        currentIndex: 1,
        swiperStyle: {},
        startX: 0,
        moveX: 0
      }
    },
    mounted() {
      this.$nextTick().then(() => {
        setTimeout(() => {
          this.handleDom()
          this.startTimer()
        }, 300)
      })
    },
    methods: {
      //在轮播图首尾各插入最后一个和第一个img
      handleDom() {
        let swiperEl = this.$refs.swiper
        let slideEls = swiperEl.getElementsByClassName('slide')
        this.totalWidth = swiperEl.offsetWidth
        this.slideCount = slideEls.length

        if (this.slideCount > 1) {
          let cloneFirst = slideEls[0].cloneNode(true)
          let cloneLast = slideEls[this.slideCount - 1].cloneNode(true)
          swiperEl.insertBefore(cloneLast, slideEls[0])
          swiperEl.append(cloneFirst)
          this.swiperStyle = swiperEl.style
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      },
      //打开定时器
      startTimer(){
        this.timerNum = setInterval(() => {
          this.currentIndex++
          this.scrollSwiper(-this.currentIndex * this.totalWidth)
        }, this.interval)
      },
      //
      scrollSwiper(position) {
        this.swiperStyle.transition = `transform ${this.animDuration}ms`
        this.setTransform(position)
        this.checkPosition()
      },
      //滚动轮播图片
      setTransform(position) {
        this.swiperStyle.transform = `translate(${position}px, 0)`
      },
      checkPosition() {
        setTimeout(() => {
          this.swiperStyle.transition = '0ms'

          if (this.currentIndex > this.slideCount) {
            this.currentIndex = 1
            this.setTransform(-this.currentIndex * this.totalWidth)
          } else if (this.currentIndex < 1) {
            this.currentIndex = this.slideCount
            this.setTransform(-this.currentIndex * this.totalWidth)
          }

        }, this.animDuration)
      },

      //触摸开始
      touchStart(e) {
        this.startX = e.touches[0].pageX
        clearInterval(this.timerNum)
      },
      //触摸过程
      touchMove(e) {
        let currentX = e.touches[0].pageX
        this.moveX = this.startX - currentX
        let swiperX = -this.currentIndex * this.totalWidth
        this.setTransform(swiperX - this.moveX)
      },
      //触摸结束
      touchEnd(e) {
        //打开定时器
        this.startTimer()

        //将图片滚动到正确的位置
        if (this.moveX >= this.totalWidth * this.moveRatio) {
          this.currentIndex++
        } else if (this.moveX <= -this.totalWidth * this.moveRatio) {
          this.currentIndex--
        }
        this.scrollSwiper(-this.currentIndex * this.totalWidth)
      }
    }
  }
</script>

<style scoped>
  .swiper-box {
    overflow: hidden;
    position: relative;
  }
  .swiper {
    display: flex;
    flex-direction: row;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
  }
  .indicator .indi-item {
    width: 9px;
    height: 9px;
    margin: 0 3px;
    border-radius: 50%;
    border: 1px solid rgba(29, 29, 29, 0.8);
    background-color: transparent;
  }
  .indicator .indi-item.active {
    background-color: #ffa023;
  }
</style>
