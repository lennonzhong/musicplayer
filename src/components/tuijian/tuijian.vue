<template>
    <div class="tuijian" ref="tuijian">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in sliders">
                <a :href="item.linkUrl">
                   <img :src="item.picUrl">
                </a>
            </div>
          </div>
           <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import { getRecommand } from "../../commom/api/getRecommd";
import Swiper from "../../../node_modules/swiper/dist/js/swiper";
export default {
  data() {
    return {
      sliders: []
    };
  },
  created() {
    this._getRecommand();
  },
  methods: {
    _getRecommand() {
      getRecommand().then(res => {
        if (res.code === 0) {
          this.sliders = res.data.slider;
          this._initSlider();
        }
      });
    },

    _initSlider() {
      var mySwiper = new Swiper(".swiper-container", {
        autoplay: 2000, //可选选项，自动滑动
        pagination : '.swiper-pagination',
        paginationType : 'fraction',
        paginationClickable :true,
      });
    }
  },
  components: {}
};
</script>
<style lang="scss" scoped>
  @import '../../../node_modules/swiper/dist/css/swiper.min.css';

  .tuijian{
    width: 100%;
    .swiper-container{
      width: 100%;
      .swiper-slide{
        width: 100%;
        overflow: hidden;
        width: 100%;
        img{
          display: inline-block;
          width: 100%;
        }
      }
    }
  }
</style>
