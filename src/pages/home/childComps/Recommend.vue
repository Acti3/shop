<template>
  <div class="recommend">
      <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'RecommendName',
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    font-size: 12px;
    text-align: center;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
}
</style>