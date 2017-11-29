<template>
  <div class="singerDetail">
      <h1>
        <span class="icon-back" @click="back"></span>
        {{title}}</h1>
      <div>
          <ul>
              <li v-for="item in singerList" @click="enterDetail(item)">
                  <!-- {{item}} -->
                  <img v-bind:src="item.imgurl.replace('{size}', '400')" alt="">
                  <p>{{item.singername}}</p>
              </li>
          </ul>
      </div>

      <router-view></router-view>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      typeid: 88,
      singerList: []
    };
  },
  props: ["title"],
  created() {
    this.typeid = this.$route.params.typeid;
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
      //"singer"+"/list/88?json=true"
      axios.get(`singer/list/${this.typeid}?json=true`).then(res => {
        this.singerList = res.data.singers.list.info;
      });
    },
    back() {
      this.$router.back(-1);
    },
    enterDetail(item){
        this.$router.push({
          path:`/singer/info/${item.singerid}`
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.singerDetail {
  position: fixed;
  z-index: 9;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #222;

  h1 {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #555;
    font-size: 16px;
    color: #a2a2a2;
    text-align: center;
    font-weight: 600;
    position: relative;
    span {
      position: absolute;
      left: 20px;
      line-height: 40px;
      font-size: 18px;
    }
  }
  & > div {
    position: absolute;
    z-index: 9;
    top: 44px;
    bottom: 40px;
    left: 0;
    right: 0;
    overflow: scroll;
    ul {
      padding: 20px;
      padding-top: 0;
      li {
        display: flex;
        height: 60px;
        box-sizing: border-box;
        padding: 10px;
        img {
          flex: 0 0 40px;
          border-radius: 50%;
          height: 40px;
          line-height: 60px;
        }
        p {
          flex: 1 1;
          line-height: 40px;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>