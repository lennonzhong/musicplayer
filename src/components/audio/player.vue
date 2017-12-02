<template>
    <div>
      <transition name="fade">
        <div class="player-detail" v-show="showStatus">
          <span class="icon-back" @click="togglePlayer()"></span>
          <div>
              <h1>{{playCurrentObj.song_name}}</h1>
              <img :src="playCurrentObj.img" alt=""> 
              <div class="lyric"></div>
              <div class="controls">
                <div class="progressbar">
                      <span class="start-time">{{start_time}}</span>
                      <div class="progress-container" @click="changeSchedule($event)">
                        <div class="progress-length" id="progresslength"></div>
                      </div>
                      <span class="end-time">{{end_time}}</span>
                </div>
                  <div class="btns">
                    <span class="icon-prev" @click.stop="playPrev()"></span>
                  <span :class="playStatus?'icon-pause-mini':'icon-play-mini'" @click.stop="changeStatus()"></span>
                  <span class="icon-next" @click.stop="playNext()"></span>
                  </div>
              </div>
          </div>
        </div>
    </transition>
    <div class="mini-player" @click.stop="togglePlayer()">
        <audio v-bind:src="playCurrentObj.play_url" id="audio" autoplay @canplaythrough="endTime()"  @timeupdate="startTime()"  @canplay="changeButton()" @ended="changeButton()"></audio>
        <div>
            <img :src="playCurrentObj.img" alt="">

            <div class="songinfo">
                 <h5>{{playCurrentObj.song_name}}</h5>
                <p>{{playCurrentObj.author_name}}</p>
            </div>

            <div class="progress-circle">
                <span :class="playStatus?'icon-pause-mini':'icon-play-mini'"  @click.stop="changeStatus()"></span>
            </div>
            <div class="addsongList">
                <span class="icon-playlist"></span>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";
import { formate } from "../../commom/js/formate";

export default {
  data() {
    return {
      showStatus: false,
      start_time: "",
      end_time: "",
      current:0
    };
  },
  methods: {
    changeSchedule(event){
       // document.getElementById("audio").currentTime=(document.getElementById('progresslength').style.width)*100*document.getElementById("audio").duration;
         console.log(event.offsetX);
         console.log(event.offsetX/(document.documentElement.clientWidth-140)*document.getElementById("audio").duration);
         document.getElementById("audio").currentTime=event.offsetX/(document.documentElement.clientWidth-140)*document.getElementById("audio").duration;
         this.changePlayStatus(false);
    },
    startTime() {
      this.start_time = formate(document.getElementById("audio").currentTime);
       this.current= (document.getElementById("audio").currentTime/document.getElementById("audio").duration*100)+'%';
       document.getElementById('progresslength').style.width=this.current?this.current:0;
    },
    endTime() {
      this.end_time = formate(document.getElementById("audio").duration);
    },
    playPrev() {},
    playNext() {},
    togglePlayer() {
      this.showStatus = !this.showStatus;
    },
    changeButton() {
      this.changePlayStatus(!this.playStatus);
    },
    changeStatus() {
      if (!this.playStatus) {
        document.getElementById("audio").play();
      } else {
        document.getElementById("audio").pause();
      }
      this.changePlayStatus(!this.playStatus);
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s linear;
}

.fade-enter {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
  transform: scale(0.2);
  transform: skew(90deg);
}
.fade-leave-to {
  transform: translate3d(0, -100%, 0);
  opacity: 0;
  transform: scale(0.2);
  transform: skew(-90deg);
}


.player-detail {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  background-color: #222;
  z-index: 200;
  span.icon-back {
    position: relative;
    top: 20px;
    left: 20px;
    font-size: 20px;
  }
  div {
    h1 {
      text-align: center;
      line-height: 50px;
      height: 50px;
      font-size: 20px;
    }
    img {
      width: 80%;
      border-radius: 50%;
      display: block;
      text-align: center;
      margin: 20px auto;
      animation: rotate 30s linear infinite;
    }
    .lyric {
      width: 100%;
      height: 170px;
    }
    .controls {
      .progressbar {
        position: relative;
        display: flex;

        .start-time,
        .end-time {
          flex: 0 0 70px;
          font-size: 16px;
          text-align: center;
        }

        .progress-container {
          flex: 1 1;
          margin: 6px auto;
          background-color: #fff;
          height: 2px;
          border-radius: 2px;
          box-shadow: 1px 1px 4px 4px #888888;
          .progress-length {
            background-color: #33d6ff;
            height: 2px;
          }
        }
      }
      .btns {
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 25px;
        & > span {
          padding: 0 10px;
        }
      }
    }
  }
}
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

