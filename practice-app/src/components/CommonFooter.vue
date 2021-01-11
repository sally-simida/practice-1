<template>
  <footer :style="{ backgroundColor: curList.color }">
    <div v-for="item in list" :key="item.path" @click="change(item)">
      <router-link :to="item.path">{{ item.name }}</router-link>
    </div>
  </footer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      list: [
        { path: "/", name: "剧集", color: "#fcccc0" },
        { path: "/music", name: "音乐", color: "#ffcc00" },
        { path: "/book", name: "书籍", color: "#ffa000" },
        { path: "/chant", name: "聊天", color: "#ccc000" },
      ],
    };
  },
  computed: {
    ...mapState(["curList"]),
  },
  methods: {
    ...mapMutations(["setChange"]),
    change(item) {
      this.setChange(item);
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  a {
    text-decoration: none;
    line-height: 40px;
    color: white;
  }
}
</style>
