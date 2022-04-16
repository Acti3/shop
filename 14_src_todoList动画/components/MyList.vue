<template>
<ul class="todo-main">
  <transition-group appear name="todo" key="1"> 
    <MyItem v-for="todoObj in todos"
     :key="todoObj.id" 
     :todo="todoObj" />
  </transition-group>
  </ul>
</template>

<script>
import MyItem from './MyItem'
export default {
    name:"MyList",
    components:{
        MyItem
    },
    props:['todos']
}
</script>

<style>
    .todo-enter-active{
        animation: atguigu 1s;
    }
    /* v-enter-active */
    .todo-leave-active{
        animation: atguigu 1s reverse;
    }
    @keyframes atguigu {
        from{
            transform: translateX(100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>