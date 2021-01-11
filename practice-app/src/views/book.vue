<template>
  <div>
    <div>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in list" :key="item">
          <img :src="'https://images.weserv.nl/?url=' + item" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <el-tabs
        v-model="activeName"
        v-loading.fullscreen="loading"
        element-loading-text="你这网速也不行啊！"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.3)"
        fullscreen
        :stretch="true"
        @tab-click="handleClick"
        ><!--
         v-loading.fullscreen="loading" 修饰符  整个屏幕会出现遮罩层，等待数据加载完成之后清楚
         注意修饰符的用法 ！！！
          v-loading.lock= true   锁定当前屏幕，当数据加载完成之后，完成跳转页面
       -->
        <el-tab-pane label="虚构类" name="fiction">
          <ul>
            <li class="book" v-for="item in book" :key="item.id">
              <div class="img">
                <img
                  :src="'https://images.weserv.nl/?url=' + item.cover.url"
                  alt=""
                />
              </div>
              <div class="info">
                <h3>{{ item.title }}</h3>
               <!--  <el-rate
                  :value="getRating(item)"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate> -->
                <p>{{ item.info }}</p>
              </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="非虚构类" name="nonfiction">
          <ul>
            <li class="book" v-for="item in book" :key="item.id">
              <div class="img">
                <img
                  :src="'https://images.weserv.nl/?url=' + item.cover.url"
                  alt=""
                />
              </div>
              <div class="info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.info }}</p>
              </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      list: [],
      activeName: "fiction",
      book: [],
    };
  },
  methods: {
    getData() {
      this.loading = true;
      var baseUrl = "https://bird.ioliu.cn/v2?url=";
      var bookUrl =
        "https://m.douban.com/rexxar/api/v2/subject_collection/book_" +
        this.activeName +
        "/items?os=android&for_mobile=1&start=0&count=18";
      this.axios
        .get(baseUrl + bookUrl)
        .then((res) => {
          this.list = res.data.subject_collection_items.map((item) => {
            return item.cover.url;
          });
          this.book = res.data.subject_collection_items;
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleClick(tab, event) {
      console.log(tab, event);
      this.getData();
    },
    /* getRating(item) {
      var val = 0;
      val = item.rating.value / 2;
      val = val * 10;
      val = Math.trunc(val);
      val = val * 10;
      return val;
    }, */
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
ul {
  padding: 0;
}
.book {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #cccccc;
  .img {
    flex: 2;
    padding-right: 5px;
  }
  .info {
    flex: 3;
    h3 {
      font-weight: 400;
      margin-left: 10px;
    }
    p {
      padding-top: 10px;
      font-size: 15px;
    }
  }
}
</style>
