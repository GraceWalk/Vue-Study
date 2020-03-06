<template>
  <div class="swiper-box" ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <slot></slot>
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
        }, 100)
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
          this.scrollContent(-this.currentIndex * this.totalWidth)
        }, this.interval)
      },
      scrollContent(position) {
        this.swiperStyle.transition = `transform 300ms`
        this.setTransform(position)
        this.checkPosition()
      },
      setTransform(position) {
        console.log(position)
        this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`
      },
      checkPosition: function () {
        window.setTimeout(() => {
          // 1.校验正确的位置
          this.swiperStyle.transition = '0ms';
          // if (this.currentIndex >= this.slideCount + 1) {
          //   this.currentIndex = 1;
          //   this.setTransform(-this.currentIndex * this.totalWidth);
          // } else if (this.currentIndex <= 0) {
          //   this.currentIndex = this.slideCount;
          //   this.setTransform(-this.currentIndex * this.totalWidth);
          // }
          // 2.结束移动后的回调
          // this.$emit('transitionEnd', this.currentIndex-1);
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
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }

</style>