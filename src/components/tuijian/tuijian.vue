<template>
    <div class="tuijian" ref="wrapper">
        <div>
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
        <div class="wrapper"> 
          <ul class="content"> 
            <li v-for="item in toprankList" @click="playMusic(item)">
                <p>
                  <span class="icon-music"></span>
                  {{item.filename}}
                  </p>
            </li> 
          </ul> 
        </div>
        </div>
    </div>
</template>
<script>
import { getRecommand } from "../../commom/api/getRecommd";
import VueAwesomeSwiper from "vue-awesome-swiper";
require("swiper/dist/css/swiper.css");
import Bscroll from "better-scroll";
import axios from "axios";

import { mapMutations } from "vuex";

export default {
  data() {
    return {
      sliders: [],
      toprankList: [],
      songList: []
    };
  },
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

      axios
        .get("/kugou", {
          params: {
            json: true
          }
        })
        .then(res => {
          console.log(res.data);
          this.toprankList = res.data.data;
          this.$nextTick(() => {
            this.scroll = new Bscroll(this.$refs.wrapper, { click: true });
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
    },
    playMusic(item) {
      this.setPlayStatus(false);
      axios
        .get(`/wkugou/yy/index.php?r=play/getdata&hash=${item.hash}`)
        .then(res => {
          let data = {
            song_name: res.data.data.song_name,
            author_name: res.data.data.author_name,
            img: res.data.data.img,
            lyrics: res.data.data.lyrics,
            play_url: res.data.data.play_url,
            timelength: res.data.data.timelength
          };
          this.setPlayCurrentObj(data);
          console.log(res.data);
        });
    },

    ...mapMutations({
      setPlayCurrentObj: "setplayCurrentObj"
    }),
    ...mapMutations({
      setPlayStatus: "setplayState"
    })
  }
};
</script>
<style lang="scss" scoped>
.tuijian {
  width: 100%;
  overflow: hidden;
  position: absolute;
  padding-bottom: 20px;
  top: 85px;
  left: 0;
  right: 0;
  bottom: 60px;
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
    ul {
      li {
        display: block;
      }
    }
  }
  p {
    span {
      margin-right: 5px;
    }
    padding: 4px 30px;
    height: 25px;
    line-height: 28px;
    text-align: left;
    color: white;
    overflow: hidden;
    font-size: 16px;
  }
}
</style>
