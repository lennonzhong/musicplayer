<template>
    <div class="mini-player">
        <audio src="http://ws.stream.qqmusic.qq.com/102425546.m4a?fromtag=46"></audio>
        <div>
            <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg?max_age=2592000" alt="">

            <div class="songinfo">
                 <h5>刚刚好</h5>
                <p>薛之谦</p>
            </div>

            <div class="progress-circle">
                <span class="icon-mini icon-pause-mini"></span>
            </div>
            <div class="addsongList">
                <span class="icon-playlist"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  ///api/getSongs
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
  div {
    display: flex;
    img {
      flex: 0 0 40px;
      height: 40px;
      border-radius: 50%;
      margin: 10px;
      animation: rotate 2s linear infinite;
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

