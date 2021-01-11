<template>
  <div>
  <div class="music-box">
      <aplayer :audio="audio" :lrcType="3" />
  </div>
    <ul>
      <li class="order">序号</li>
      <li class="name">歌曲名</li>
      <li class="player">歌手</li>
    </ul>
    <ul>
      <li class="waper" v-for="(item,index) in list" :key="item.id" @click="play(item.id)">
      <span class="order">{{index +1 }}</span>
      <span class="name">{{item.name}}</span>
      <span class="player">{{item.player}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});
export default {
  data() {
    return {
      list:[],
      audio: {
        name: '东西（Cover：林俊呈）',
        artist: '纳豆',
        url: 'https://cdn.moefe.org/music/mp3/thing.mp3',
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc',
      },
    };
  },
  methods: {
   getData() {
      let baseUrl = "https://bird.ioliu.cn/netease/playlist?id=2306664471";
      this.axios.get(baseUrl).then((res)=>{
        this.list=res.data.playlist.tracks.map((item)=>{
          return{
            id:item.id,
            name:item.name,
            player:item.ar[0].name
          }
        });
      }).catch(err=>{
        console.log(err);
      })
    }, 
    play(id){
      var url ="https://bird.ioliu.cn/netease/song?id="+id;
      this.axios.get(url).then((res)=>{
        console.log(res);
        this.audio.name=res.data.data.name;
        this.audio.cover=res.data.data.al.picUrl;
        this.audio.url=res.data.data.mp3.url;
        this.audio.artist=res.data.data.ar[0].name;
        }).catch(err=>{
          console.log(err);
        })
    }
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.music-box{
  margin: 10px 0;
  padding: 10px;
}
ul{
  padding: 10px;
}
li{
  list-style-type: none;
  display: inline-block;
}
.waper{
  display: block;
}
.order{
  display: inline-block;
  width: 50px;
  margin: 10px auto;
    font-size: 14px;

}
.name{
    display: inline-block;
  width: 150px;
  margin: 10px auto;
  font-size: 14px;
}
.player{
    display: inline-block;
  width: 100px;
  margin: 10px auto;
    font-size: 14px;

}
</style>
