<template>
  <div>
      <button @click="isShow=!isShow">显示/隐藏</button>
      <transition appear name="hello"> 
            <h2 v-show="isShow" >你好啊！</h2>
      </transition> 
  </div>
</template>

<script>
export default {
    name:'TestVue',
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
    }
    .hello-enter-active{
        animation: atguigu 1s;
    }
    /* v-enter-active */
    .hello-leave-active{
        animation: atguigu 1s reverse;
    }
    @keyframes atguigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>