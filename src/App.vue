<template>
  <div id="app">
    <mheader></mheader>
    <tabs></tabs>
    <keep-alive>
     <router-view/>
    </keep-alive>

    <keep-alive>
        <miniplayer></miniplayer>
    </keep-alive>
  </div>
</template>

<script>
import "./commom/css/reset.scss";
import "./commom/css/base.scss";
import "./commom/css/icon.scss";
import "./commom/css/variable.scss";

import mheader from "./components/m-header/wheader";
import tabs from "./components/tabs/tabs";
import miniplayer from './components/audio/player'

export default {
  name: "app",
  components: {
    mheader,
    tabs,
    miniplayer
  }
};
</script>
