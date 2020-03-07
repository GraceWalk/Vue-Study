<template>
  <div class="swiper-box">
    <div class="swiper" ref="swiper"><slot></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'Swiper',
    props: {
      interval: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        slideCount: 0,
        timerNum: 0,
        totalWidth: 0,
        currentIndex: 1,
        swiperStyle: {}
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
      startTimer(){
        this.timerNum = setInterval(() => {
          this.currentIndex++
          this.scrollSwiper(-this.currentIndex * this.totalWidth)
        }, this.interval)
      },
      scrollSwiper(position) {
        this.swiperStyle.transition = 'transform 300ms'
        this.setTransform(position)
        this.checkPosition()
      },
      setTransform(position) {
        this.swiperStyle.transform = `translate(${position}px, 0)`
      },
      checkPosition() {
        setTimeout(() => {
          this.swiperStyle.transition = '0ms'

          console.log(this.currentIndex, this.slideCount)
          if (this.currentIndex >= this.slideCount) {
            this.currentIndex = 0
            this.setTransform(-this.currentIndex * this.totalWidth)
          }

        }, 300)
      },



      //手指动作
      touchStart(e) {
      },
      touchMove(e) {
      },
      touchEnd(e) {
      }
    }
  }
</script>

<style scoped>
  .swiper-box {
    overflow: hidden;
  }
  .swiper {
    display: flex;
    flex-direction: row;
  }

</style>