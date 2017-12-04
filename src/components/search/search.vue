<template>
   <div class="content">
       <div class="searchbox">
        <i class="icon-search" @click="search(query)"></i>
           <input ref="query" v-model="query" class="box" placeholder="搜索歌曲、歌手"/>
           <i @click="clear" v-show="query" class="icon-dismiss"></i>
       </div>

       <div class="hot-search clearfix">
           <h1>热门搜索</h1>
           <ul class="clearfix">
               <li v-for="item in hotKeys" @click="search(item.k)">
                 {{item.k}}
               </li>
           </ul>
       </div>
       <div class="history-search">
        <h1>
          搜索历史
          <span class="icon-clear"></span>
        </h1>
        <ul>
            <li>
                双世宠妃  <span class="icon-close"></span>
            </li>
        </ul>
       </div>

       <div class="search-result" v-show="searchShow">
         <ul>
           <li v-for="result in searchResult" @click="changePlay(result)">
                 {{result.filename}}
           </li>
         </ul>
       </div>
   </div>
</template>
<style lang="scss" scoped>
.content {
  position: absolute;
  top: 90px;
  bottom: 60px;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0 20px;
  .searchbox {
    border-radius: 5px;
    background-color: #444;
    margin-top: 30px;
    height: 30px;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    position: relative;
    i.icon-search {
      font-size: 20px;
      position: absolute;
      left: 10px;
      top: 5px;
    }
    input {
      flex: 1 1;
      margin-left: 30px;
      border-width: 0px;
      border: transparent;
      background-color: #444;
      position: relative;
      top: 0px;
      font-size: 14px;
      color: white;
    }
    i.icon-dismiss {
      position: absolute;
      right: 10px;
      top: 7px;
    }
  }
  .hot-search {
    margin-top: 50px;
    h1 {
      font-weight: 500px;
      position: relative;
      width: 100%;
      span {
        position: absolute;
        right: 0px;
        top: 5px;
      }
    }
    ul {
      list-style: none;
      margin-top: 10px;
      height: 100px;
      overflow: hidden;
      li {
        float: left;
        display: block;
        box-sizing: border-box;
        padding: 5px 8px;
        margin-right: 20px;
        margin-top: 20px;
        background-color: #444;
        font-size: 12px;
        border-radius: 5px;
      }
    }
  }

  .history-search {
    position: relative;
    margin-top: 40px;
    h1 {
      span {
        position: absolute;
        right: 0px;
        top: 5px;
      }
    }
    ul {
      margin-top: 30px;
      li {
        position: relative;
        span {
          font-size: 12px;
          position: absolute;
          right: 0;
          top: 5px;
          color: white;
        }
      }
    }
  }

  .search-result {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background-color: #222;
    overflow: scroll;
    ul {
      height: auto;
      li {
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
      }
    }
  }

  .clearfix {
    overflow: auto;
    zoom: 1;
  }
}
</style>

<script>
import axios from "axios";
import {mapMutations} from 'vuex';


export default {
  data() {
    return {
      query: "",
      hotKeys: [],
      searchResult: [],
      searchShow: false
    };
  },
  created() {
    this.getHotKeys();
  },
  methods: {
    search(query) {
      this.query = query;
      this.searchShow = true;
      axios
        .get("/searchKugou", {
          params: {
            keyword: this.query,
            page: 1,
            pagesize: 30,
            showtype: 1
          }
        })
        .then(res => {
          console.log(res.data.data.info);
          this.searchResult = res.data.data.info;
        });
    },
    changePlay(item) {
      let data = {
        song_name: item.filename,
        author_name: item.singername,
        img: "",
        lyrics: "",
        play_url: ""
      };
     this.searchShow=false;
      axios(
        `/wkugou/yy/index.php?r=play/getdata&hash=${item.hash}`,
        {}
      ).then(res => {
        data.img=res.data.data.img;
        data.lyrics=res.data.data.lyrics;
        data.play_url=res.data.data.play_url;

        this.changeMusic(data);
      });
    },
    clear() {
      this.query = "";
      this.searchShow=false;
    },
    getHotKeys() {
      let param = {
        g_tk: 792116527,
        uin: 0,
        format: "json",
        inCharset: "utf-8",
        outCharset: "utf-8",
        notice: 0,
        platform: "h5",
        needNewCode: 1,
        _: 1511937697390
      };
      axios("/yy/splcloud/fcgi-bin/gethotkey.fcg?", {
        params: param
      }).then(res => {
        this.hotKeys = res.data.data.hotkey;
      });
    },
    ...mapMutations({
         changeMusic:'setplayCurrentObj'
    })
  },
  computed:{
    
  }
};
</script>

