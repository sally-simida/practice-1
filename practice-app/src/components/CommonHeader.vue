<template>
  <div class="header" :style="{ backgroundColor: curList.color }">
    <span @click="go">首页</span>
    <span class="center">{{ curList.name }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["curList"]),
  },
  methods: {
    go() {
      this.$router.push("/");
      this.curList.name = "剧集";
      this.curList.color = "#fcccc0";
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 40px;
  width: 100%;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  line-height: 40px;
  color: white;
  span {
    padding: 10px;
  }
  .center {
    margin-left: 100px;
  }
}
</style>
