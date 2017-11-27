<template>
    <div class="tabs">
        <router-link tag="div" class="tab-item checked" to="/tuijian">推荐</router-link>
        <router-link tag="div" class="tab-item" to="/singer">歌手</router-link>
        <router-link tag="div" class="tab-item" to="/rank">排行</router-link>
        <router-link tag="div" class="tab-item" to="/search">搜索</router-link>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    .tabs{
        width: 100%;
        display: flex;
        height: 40px;
        line-height: 40px;
        .tab-item{
            flex: 1 4;
            text-align: center;
        }
    }
</style>
