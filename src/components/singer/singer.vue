<template>
<div>
<div class="singer" ref="wrapper">
       <ul>
           <li v-for="items in SingerType" @click="goRoute(items)">
                <div class="typeList">
                    <img :src="items.imgurl" alt="">
                    <div>
                        <h3>{{items.classname}}</h3>
                    </div>
                    <span class=""></span>
                </div>
           </li>
       </ul>
   </div>
   <router-view :title="msg"></router-view>
</div>
   
</template>
<script>
import axios from "axios";
import BScroll from "better-scroll";
import SingerDetail from "./SingerListDetail"

export default {
  data() {
    return {
      SingerType: [],
      msg:''
    };
  },
  created() {
    this.getSingerClass();
    this._initScroll();
  },
  methods: {
    getSingerClass() {
      axios.get("/api/getSingerClass").then(res => {
        this.SingerType = res.data.list;
      });
    },
    _initScroll() {
      this.$nextTick(() => {
        this.SingerScroll = new BScroll(this.$refs.wrapper, { click: true });
      });
    },
    goRoute(item) {
      this.msg= item.classname;
      this.$router.push({ 
        path:`/singer/list/${item.classid}`
       });
    }
  },
  components: {
    SingerDetail
  }
};
</script>
<style lang="scss" scoped>
.singer {
  top: 90px;
  bottom: 60px;
  left: 0;
  right: 0;
  position: absolute;
  overflow: hidden;
  ul {
    li {
      .typeList {
        width: 100%;
        height: 80px;
        display: flex;
        border-bottom: 0.2px solid #333;
        img {
          margin: 10px 20px;
          flex: 0 0 60px;
          height: 60px;
          border-radius: 50%;
          vertical-align: bottom;
        }
        div {
          flex: 1 1;
          display: block;
          h3 {
            display: block;
            height: 80px;
            line-height: 80px;
            font-size: 19px;
          }
        }
      }
    }
  }
}
</style>

