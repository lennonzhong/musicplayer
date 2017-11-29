<template>
  <div>
      <h1>{{title}}</h1>
      <div>
          <ul>
              <li></li>
          </ul>
      </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "热门"
    };
  },
  created() {
    this._getSingerList();
  },
  methods: {
    _getSingerList() {
        axios.get("singer"+"/list/88?json=true").then(res => {
            console.log(res.data);
          });
    }
  }
};

</script>
<style lang="scss" scoped>

</style>