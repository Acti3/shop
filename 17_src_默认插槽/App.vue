<template>
  <div class="container">
    <Category tittle="美食"  :listData="foods"><img src="./assets/logo.png" alt=""></Category>
    <Category tittle="游戏"  :listData="games">
      <ul>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category tittle="电影"  :listData="films">
      <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
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
  .container{
    display: flex;
    justify-content: space-around;
  }
  video{
    width: 100%;
  }
</style>