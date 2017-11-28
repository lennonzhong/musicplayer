<template>
    <div class="tuijian" ref="tuijian">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in sliders">
                <a v-bind:href="item.linkUrl">
                   <img v-bind:src="item.picUrl">
                </a>
            </div>
          </div>
            <div class="swiper-pagination" id="pagination">
                
            </div>
        </div>
        <h1>热门歌曲推荐</h1>
        <div class="wrapper" ref="wrapper"> 
          <ul class="content"> 
            <li v-for="item in toprankList">
                <p>{{item.filename}}</p>
            </li> 
          </ul> 
        </div>
    </div>
</template>
<script>
import { getRecommand } from "../../commom/api/getRecommd";
import VueAwesomeSwiper from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
import Bscroll from "better-scroll";
import axios from "axios";

export default {
  data() {
    return {
      sliders: [],
      toprankList: []
    };
  },
  mounted() {},
  created() {
    this._getRecommand();
    this.getDisList();
  },
  methods: {
    getDisList() {
      let data = Object.assign({
        picmid: 1,
        rnd: Math.random(),
        loginUin: 0,
        hostUin: 0,
        platform: "yqq",
        needNewCode: 0,
        categoryId: 10000000,
        sortId: 5,
        sin: 0,
        ein: 29
      });

      axios.get("/api/getDislist", data).then(res => {
        // console.log(res.data.data);
        this.toprankList = res.data.data;
        this.$nextTick(() => {
          this.scroll = new Bscroll(this.$refs.wrapper, {});
        });
      });
    },

    _getRecommand() {
      getRecommand().then(res => {
        if (res.code === 0) {
          this.sliders = res.data.slider;
          this._initSlider();
        }
      });
    },

    _initSlider() {
      this.$nextTick(function() {
        var mySwiper = new Swiper(".swiper-container", {
          // 如果需要分页器
          notNextTick: true,
          autoplay: 3000, //可选选项，自动滑动
          loop: true,
          pagination: ".swiper-pagination",
          paginationType: "bullets",
          paginationClickable: true
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.tuijian {
  width: 100%;
  padding-bottom: 10px;
  .swiper-container {
    width: 100%;
    .swiper-slide {
      width: 100%;
      overflow: hidden;
      width: 100%;
      img {
        display: inline-block;
        width: 100%;
      }
    }
  }
  h1 {
    width: 100%;
    height: 40px;
    color: #ffcd32;
    line-height: 40px;
    text-align: center;
    font-weight: 500;
    font-size: 18px;
  }

  .wrapper {
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 20px;
    overflow: hidden;
    height: 376px;
  }
  p {
    padding: 4px 30px;
    height: 20px;
    line-height: 28px;
    text-align: left;
    color: white;
    overflow: hidden;
    font-size: 16px;
  }
}
</style>
