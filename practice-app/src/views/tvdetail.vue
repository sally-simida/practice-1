<template>
  <div>
    <div>
      <img :src="'https://images.weserv.nl/?url=' + data.pic.normal" alt="" />
      <div class="info">
        <h3>{{ data.title }}</h3>
        <span>{{ data.card_subtitle }}</span>
        <p>{{ data.episodes_info }}</p>
      </div>
      <p class="container">{{ data.intro }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    };
  },
  methods: {
    getData() {
      var baseUrl = "https://bird.ioliu.cn/v2?url=";
      var tvUrl =
        "https://m.douban.com/rexxar/api/v2/tv/" +
        this.$route.params.id +
        "?ck=&for_mobile=1";
      /* 从路由中获取id ，可以在浏览器的vue中查看， 找到相应的变量位置 */
      this.axios
        .get(baseUrl + tvUrl)
        .then((res) => {
          console.log(res);
          this.data = res.data;
          console.log(this.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 150px;
  height: 200px;
  margin: 5px;
  border: 1px solid #cccccc;
}
.info {
  float: right;
  margin-top: 20px;
  width: 180px;
  height: 200px;
  h3 {
    margin: 10px 20px;
    font-weight: 400;
  }
  span {
    margin: 10px 0;
    font-size: 14px;
    color: #464545;
  }
  p {
    margin-left: 20px;
    font-size: 14px;
    color: #c95019;
  }
}
.container {
  margin: 20px;
}
</style>
