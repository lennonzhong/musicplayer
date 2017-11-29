<template>
   <div class="content">
       <div class="searchbox">
        <i class="icon-search"></i>
           <input ref="query" v-model="query" class="box" placeholder="搜索歌曲、歌手"/>
           <i @click="clear" v-show="query" class="icon-dismiss"></i>
       </div>

       <div class="hot-search clearfix">
           <h1>热门搜索</h1>
           <ul class="clearfix">
               <li v-for="item in hotKeys">
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

  .clearfix {
    overflow: auto;
    zoom: 1;
  }
}
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      query: "",
      hotKeys:[]
    };
  },
  created() {
    this.getHotKeys();
  },
  methods: {
    clear() {
      this.query = "";
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
        params:param
      }).then((res) => {
        this.hotKeys=res.data.data.hotkey;
      });
    }
  }
};
</script>

