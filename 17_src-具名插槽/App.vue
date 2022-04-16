<template>
  <div class="container">
    <Category tittle="美食"  :listData="foods">
      <img slot="center" src="./assets/logo.png" alt="">
      <a slot="footer" href="">百度</a>
    </Category>
    <Category tittle="游戏"  :listData="games">
      <ul slot="center">
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
     <div class="foot" slot="footer">
        <a href="">网络游戏</a>
        <a href="">单机游戏</a>
     </div>
    </Category>
    <Category tittle="电影"  :listData="films">
      <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
      <template slot="footer">
        <div class="foot">
        <a href="">经典</a>
        <a href="">热门</a>
        <a href="">推荐</a>
      </div>
      <h4>欢迎前来</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category'
export default {
  name:'App',
  components:{Category},
  data() {
    return {
      foods:['火锅','烧烤','小龙虾','羊排'],
      games:['红警','穿越火线','超级玛丽'],
      films:['《教父》','《你好》','《山沟沟》']
    }
  },
}
</script>

<style>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>