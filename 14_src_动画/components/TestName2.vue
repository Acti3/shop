<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition-group name="h" appear> 
            <h2 v-show="!isShow" key="1">你好啊！</h2>
            <h2 v-show="isShow" key="2">好啊！</h2>
      </transition-group> 
  </div>
</template>

<script>
export default {
    name:'TestVue2',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style>
    h2{
        background-color: blueviolet;
        /* transition: 0.5s linear; */
    }
    /* 进入起点 */
    .h-enter , .h-leave-to{
        transform: translateX(-100%);
    }
    .h-enter-active,.h-leave-active{
        transition: 0.5s linear;
    }
    /* 进入终点 */
    .h-enter-to, .h-leave{
        transform: translateX(0);
    }
    /* 离开起点 */
    /* .h-leave{
        transform: translateX(0);
    } */
    /* 离开终点 */
    /* .h-leave-to{
        transform: translateX(-100%);
    } */
</style>