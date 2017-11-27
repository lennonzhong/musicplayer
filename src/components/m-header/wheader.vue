<template>
    <div class="m-header">
        <div class="m-logo"></div>
        <div class="text">
            <h1>Lennon Music</h1>
        </div>
        <router-link tag="div" to="/user" class="mine">
            <i class="icon-mine"></i>
        </router-link>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "./../../commom/css/mixin.scss";
@import "./../../commom/css/variable.scss";
// @import "./../../commom/css/icon.scss";
.m-header {
  text-align: center;
  .m-logo {
    @include bg-image("logo");
    width: 30px;
    height: 32px;
    background-size: 30px 32px;
    display: inline-block;
    vertical-align: top;
    margin-top: 6px;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: $font-size-large;
    h1 {
      vertical-align: top;
      line-height: 44px;
      font-size: $font-size-large;
    }
  }
  .mine {
    i {
      font-size: 20px;
      color: $color-theme;
      padding: 12px;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
