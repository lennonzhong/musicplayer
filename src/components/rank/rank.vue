<template>
     <div>
       <div class="wrapper" ref="wrapper">
           <ul>
               <li v-for="item in rankList" @click="enterDetail(item.id)">
                   <div class="rank-item">
                     <img :src="item.picUrl" alt="">
                     <div>
                       <h1>{{item.topTitle}}</h1>
                       <p v-for="(song,index) in item.songList">
                         {{index+1}}.&nbsp;{{song.songname}}-{{song.singername}}
                       </p>
                     </div>
                   </div>
               </li>
           </ul>
       </div>
       <router-view></router-view>
     </div>
</template>
<script>
import axios from "axios";
import BScroll from "better-scroll";
export default {
  data() {
    return {
      rankList: []
    };
  },
  created() {
    this.getRankList();
    this._initScroll();
  },
  methods: {
    enterDetail(topid) {
      this.$router.push({
        path: `/rank/${topid}`
      });
    },
    getRankList() {
      axios
        .get("/yy/v8/fcg-bin/fcg_myqq_toplist.fcg", {
          params: {
            g_tk: 5381,
            uin: 0,
            format: "json",
            inCharset: "utf-8",
            outCharset: "utf-8",
            notice: 0,
            platform: "h5",
            needNewCode: 1,
            _: 1511937697390
          }
        })
        .then(res => {
          this.rankList = res.data.data.topList;
        });
    },
    _initScroll() {
      this.$nextTick(() => {
        this.rankScroll = new BScroll(this.$refs.wrapper, { click: true });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  padding: 0 30px;
  top: 85px;
  bottom: 60px;
  left: 0;
  right: 0;
  position: absolute;
  overflow: hidden;
  ul {
    li {
      .rank-item {
        margin-bottom: 20px;
        background-color: #333;
        height: 100px;
        display: flex;
        img {
          flex: 0 0 100px;
          height: 100px;
        }
        div {
          display: block;
          padding: 20px 15px;
          padding-top: 10px;
          overflow: hidden;
          h1 {
            line-height: 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            height: 20px;
          }
          p {
            line-height: 20px;
            font-size: 12px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
