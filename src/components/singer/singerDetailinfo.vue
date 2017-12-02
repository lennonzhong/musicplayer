<template>
<transition  name="slider">
<div class="detail">
        <div class="header">
            <span class="icon-back" @click="back"></span>
            <img :src="singerinfo.imgurl.replace('{size}','400')" alt="">
        </div>
        <div class="songlist">
            <ul>
                <li v-for="item in singerSongs" @click="changeMusic(item)">
                    <h3>{{item.filename}}</h3>
                   <p>{{item.remark}}</p> 
                </li>
            </ul>
        </div>
    </div>
</transition>
    
</template>
<style lang="scss" scoped>
.slider-enter-active,
.slider-leave-active {
  transition: all 0.5s linear;
}

.slider-enter {
  transform: translate3d(-100%, 0, 0);
}
.slider-leave-to {
  transform: translate3d(100%, 0, 0);
}

.detail {
  position: absolute;
  z-index: 20;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
  background-color: #222;
  .header {
    position: relative;
    span {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 18px;
    }
    img {
      display: block;
      width: 100%;
      width: 100%;
    }
  }
  .songlist {
    margin-top: 0px;
    background-color: #222;
    ul {
      padding: 20px;
      margin-bottom: 40px;
      li {
        padding: 10px;
        height: 40px;
        h3 {
          font-size: 16px;
        }
        p {
          margin-top: 8px;
          font-size: 15px;
          color: #666;
          overflow: hidden;
          height: 15px;
        }
      }
    }
  }
}
</style>
<script>
import axios from "axios";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      singerid: 0
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    changeMusic(item) {
      this.setPlayStatus(false);
      axios
        .get(`/wkugou/yy/index.php?r=play/getdata&hash=${item.hash}`)
        .then(res => {
          let data={
            song_name: res.data.data.song_name,
            author_name: res.data.data.author_name,
            img: res.data.data.img,
            lyrics: res.data.data.lyrics,
            play_url: res.data.data.play_url,
          };
          this.changeCurrentPlay(data);
        });
       
      // this.changeCurrentPlay(item);
    },
    ...mapMutations({
      changeCurrentPlay: "setplayCurrentObj"
    }),
    ...mapMutations({
      setPlayStatus: "setplayState"
    })
  },
  computed: {
    ...mapGetters(["singer"]),
    ...mapGetters(["singerinfo"]),
    ...mapGetters(["singerSongs"]),
    ...mapGetters(["playStatus"])
  }
};
</script>

