<template>
    <div class="detail">
        <div class="header">
            <span class="icon-back" @click="back"></span>
            <img :src="singerinfo.imgurl.replace('{size}','400')" alt="">
        </div>
        <div class="songlist">
            <ul>
                <li v-for="item in singerSongs">
                    <h3>{{item.filename}}</h3>
                   <p>{{item.remark}}</p> 
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.detail {
  position: absolute;
  z-index: 20;
  top: 0;
  bottom: 60px;
  left: 0;
  right: 0;
  background-color: #333;
  .header {
    position: relative;
    span {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 18px;
    }
    img{
        width: 100%;
        width: 100%;
    }
  }
  .songlist{
      background-color: #333;
      ul{
          padding: 20px;
          li{
              padding: 10px;
              height: 40px;
              h3{
                  font-size: 16px;
              }
              p{
                  margin-top: 8px;
                font-size: 15px;
                color: #666;
              }
          }
      }
  }
}
</style>
<script>
import axios from 'axios';
export default {
  data() {
    return {
        singerid:0,
        singerinfo:{},
        singerSongs:{}
    };
  },
  created() {
      this.getSingerId();
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    getSingerId(){
        this.singerid=this.$route.params.singerid;
        this.getSingerInfo(this.singerid);
    },
    getSingerInfo(id){
        axios.get(`/singer/info/${id}?json=true`).then((res)=>{
            this.singerinfo=res.data.info;
            this.singerSongs=res.data.songs.list;
        })
    }
  }
};
</script>

