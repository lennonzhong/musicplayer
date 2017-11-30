<template>
    <div class="mini-player">
        <audio v-bind:src="playCurrentObj.play_url" id="audio" autoplay @canplay="changeButton()"></audio>
        <div>
            <img :src="playCurrentObj.img" alt="">

            <div class="songinfo">
                 <h5>{{playCurrentObj.song_name}}</h5>
                <p>{{playCurrentObj.author_name}}</p>
            </div>

            <div class="progress-circle">
                <span :class="playStatus?'icon-pause-mini':'icon-play-mini'" @click="changeStatus"></span>
            </div>
            <div class="addsongList">
                <span class="icon-playlist"></span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  methods: {
    changeButton() {
      this.changePlayStatus(!this.playStatus);
    },
    changeStatus() {
      if (this.playStatus) {
        document.getElementById("audio").play();
        this.changePlayStatus(!this.playStatus);
      } else {
        document.getElementById("audio").pause();
        this.changePlayStatus(!this.playStatus);
      }
    },
    ...mapMutations({
      changePlayStatus: "setplayState"
    })
  },
  computed: {
    ...mapGetters(["playCurrentObj"]),
    ...mapGetters(["playStatus"]),
    canPlay: function() {
      return document.getElementById("audio").oncanplay == true;
    }
  }
};
</script>
<style lang="scss" scoped>
.mini-player {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: #333;
  box-sizing: border-box;
  z-index: 100;
  border-top: 1px solid gray;
  div {
    display: flex;
    img {
      flex: 0 0 40px;
      height: 40px;
      border-radius: 50%;
      margin: 10px;
      animation: rotate 10s linear infinite;
    }
    .songinfo {
      flex: 1 1;
      display: block;
      margin-top: 15px;
      h5 {
        display: block;
        width: 100%;
        height: 20px;
        margin-bottom: 2px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 14px;
        color: #fff;
      }

      p {
        display: block;
        width: 100%;
        height: 20px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 12px;
        color: rgba(255, 255, 255, 0.3);
      }
    }

    .progress-circle {
      flex: 0 0 50px;
      height: 60px;
      text-align: center;
      font-size: 32px;
      span {
        line-height: 60px;
      }
    }
    .addsongList {
      flex: 0 0 50px;
      text-align: center;
      height: 60px;
      line-height: 60px;
      font-size: 32px;
      span {
        line-height: 60px;
      }
    }
  }

  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
}
</style>

