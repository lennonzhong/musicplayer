<template>
<transition name="slider">
<div class="rankList">
        <div class="header">
            <span  class="icon-back" @click="back"></span>
            <div>
                <h1>{{songLists.topinfo.ListName}}</h1>
                <img :src="songLists.topinfo.pic_album" alt="">
            </div>
        </div>

        <div class="list">
            <h1>排行榜&nbsp;共{{songLists.songlist.length}}首歌</h1>
            <div v-for="(item,index) in songLists.songlist" @click="playMusic(item)">
                <div class="list-order">
                    {{index+1}}
                </div>
                <div class="list-content">
                    <h3>{{item.data.songname}}</h3>
                    <p >
                        {{item.data.singer[0].name}}
                    </p>
                </div>
               
            </div>
                
        </div>
    </div>
</transition>
    
</template>
<script>
import axios from "axios";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      songLists: {}
    };
  },
  created() {
    let topid = this.$route.params.topid;
    this.getSongList(topid);
  },

  methods: {
    playMusic(item) {
      // let lyric

      let url = "/yy/base/fcgi-bin/fcg_music_express_mobile3.fcg?";
      let data1 = {
        g_tk: 5381,
        loginUin: 0,
        hostUin: 0,
        format: "json",
        inCharset: "utf8",
        outCharset: "utf-8",
        notice: 0,
        platform: "yqq",
        needNewCode: 0,
        cid: 205361747,
        uin: 0,
        songmid: item.data.songmid,
        filename: `C400${item.data.songmid}.m4a`,
        guid: 9296629668
      };

      axios
        .get(url, {
          params: data1
        })
        .then(res => {
          console.log();

          let data = {
            song_name: item.data.songname,
            author_name: item.data.singer[0].name,
            img: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${item.data
              .albummid}.jpg?max_age=2592000`,
            lyrics: "",
            play_url: `http://dl.stream.qqmusic.qq.com/C400${item.data
              .songmid}.m4a?guid=9296629668&vkey=${res.data.data.items[0].vkey}&uin=&fromtag=999`
          };
          this.changeMusicItem(data);
        });
    },
    getVkey(item) {},
    back() {
      this.$router.go(-1);
    },
    getSongList(topid) {
      axios
        .get("/yy/v8/fcg-bin/fcg_v8_toplist_cp.fcg", {
          params: {
            g_tk: 5381,
            uin: 0,
            format: "json",
            inCharset: "utf-8",
            outCharset: "utf-8",
            notice: 0,
            platform: "h5",
            needNewCode: 1,
            tpl: 3,
            page: "detail",
            type: "top",
            topid: topid,
            _: "1512047489229"
          }
        })
        .then(res => {
          //to do list
          this.songLists = res.data;
        });
    },
    ...mapMutations({
      changeMusicItem: "setplayCurrentObj"
    })
  }
};

//https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg
//?callback=MusicJsonCallback_lrc&pcachetime=1512179063685&songmid=001PedLg4dakYI&g_tk=5381&jsonpCallback=MusicJsonCallback_lrc&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0
</script>
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

.rankList {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 60px;
  right: 0;
  background-color: #222;
  .header {
    position: relative;
    span {
      position: absolute;
      top: 20px;
      left: 20px;
      font-size: 20px;
      font-weight: 300;
      z-index: 2;
    }
    div {
      position: relative;
      h1 {
        top: 20px;
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 20px;
      }
      img {
        width: 100%;
      }
    }
  }
  .list {
    box-sizing: border-box;
    padding: 0 25px;
    padding-top: 20px;
    padding-bottom: 60px;
    div {
      display: flex;
      height: 60px;
      .list-order {
        flex: 0 0 40px;
        font-size: 18px;
        line-height: 60px;
        text-align: center;
      }
      .list-content {
        flex: 1 1;
        display: block;
        padding: 10px 0;
        h3 {
          height: 20px;
          line-height: 20px;
          font-size: 16px;
        }
        p {
          height: 20px;
          font-size: 14px;
          line-height: 20px;
          color: #666;
        }
      }
    }
  }
}
</style>
