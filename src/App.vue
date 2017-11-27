<template>
  <div id="app">
    <mheader></mheader>
    <tabs></tabs>
    <router-view/>
  </div>
</template>

<script>
import './commom/css/reset.scss';
import './commom/css/base.scss';
import './commom/css/icon.scss';
import './commom/css/variable.scss';

import mheader from "./components/m-header/wheader";
import tabs from "./components/tabs/tabs";

export default {
  name: "app",
  components: {
    mheader,
    tabs
  }
};
</script>
