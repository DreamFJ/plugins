<template>
  <div class="hello">
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper>

  <!-- swipe插件，发现没有上面的swiper好用 -->
  <swipe class="my-swipe">
    <swipe-item class="slide1"></swipe-item>
    <swipe-item class="slide2"></swipe-item>
    <swipe-item class="slide3"></swipe-item>
  </swipe>
  </div>
</template>

<script>
/** swipe插件 */
require("vue-swipe/dist/vue-swipe.css")
// in ES6 modules
import { Swipe, SwipeItem } from "vue-swipe"

export default {
  name: "HelloWorld",
  components: {Swipe,SwipeItem},
  data() {
    return {
      swiperOption: {
        // 自动播放
        autoplay: {
          disableOnInteraction: false
        },
        speed: 1000,
        loop: true,
        // 点击分页小圆点
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 点击左右按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(1, 2000, false);
  }
};
</script>

<style scoped>
.hello {
  width: 800px;
  height: 300px;
  border: 1px solid #000;
  margin: 0 auto;
}
.swiper-container {
  height: 300px;
}
.swiper-slide {
  height: 100%;
  line-height: 300px;
  background-color: aqua;
}

/** swipe插件 */
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>

