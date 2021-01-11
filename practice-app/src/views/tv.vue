<template>
  <div>
    <h2>国产热播剧</h2>
    <ul>
      <li v-for="item in data" :key="item.id" @click="getDetail(item.id)">
        <div class="image-box">
          <img
            class="image"
            :src="'https://images.weserv.nl/?url=' + item.cover.url"
            alt=""
          />
          <div class="information">
            <h3>{{ item.title }}</h3>
            <p>{{ item.info }}</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="end" v-if="end">哎呀呀~ 小主别划啦! 到底了~</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      start: 0,
      /*  testData:[], */
      isFinish: true,
      end: false,
    };
  },
  methods: {
    getData() {
      this.isFinish = false;
      var baseUrl = "https://bird.ioliu.cn/v2?url=";
      var tvUrl =
        "https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=" +
        this.start +
        "&count=10";
      /* 网址拼接时，注意 “” 里面不能缺少 start= !!! */
      this.axios
        .get(baseUrl + tvUrl)
        .then((res) => {
          this.data = this.data.concat(res.data.subject_collection_items);
          this.isFinish = true;
          console.log(this.data);
          if (this.start >= 50) {
            this.end = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getDetail(id) {
      this.$router.push("/tvdetail/" + id);
    },
    listenScroll() {
      //Dom 操作，获取html元素
      let htmlDom = document.documentElement;
      let deviceHeight = htmlDom.clientHeight; //获取可视窗口高度
      let fullHeight = 0;
      let scrollTop = 0;
      window.onscroll = () => {
        fullHeight = htmlDom.offsetHeight; //页面总高度
        scrollTop = htmlDom.scrollTop; //滚动条距离顶部的高度
        if (
          scrollTop + deviceHeight > fullHeight - 25 &&
          this.isFinish &&
          this.start < 50
        ) {
          this.start = this.start + 10;
          this.getData();
        }
      };
    },
  },
  /*  test(){
       this.axios
        .get("https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?os=ios&for_mobile=1&start=10&count=20&loc_id=108288&_=1609935111685")
        .then((res) => {
          this.testData =res.data.subject_collection_items;
          console.log(this.testData);
        })
        .catch((err) => {
          console.log(err);
        });
  }, */
  created() {
    this.getData();
    /* this.test(); */
  },
  mounted() {
    this.listenScroll();
  },
};
</script>

<style lang="scss" scoped>
h2 {
  padding-top: 10px;
  margin: 8px;
  font-weight: 400;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
.image-box {
  padding-top: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #cccccc;
}
.image {
  width: 150px;
  height: 200px;
}
.information {
  width: 200px;
  float: right;
  padding: 20px 0;
  p {
    margin: 10px 0;
  }
}
.end{
  width: 250px;
  height: 50px;
  color: #cccccc;
  line-height: 50px;
  margin: 0 auto;
}
</style>
