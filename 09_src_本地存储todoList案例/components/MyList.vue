<template>
  <ul class="todo-main">
    <MyItem v-for="todoObj in todos"
     :key="todoObj.id" 
     :todo="todoObj" 
     :checkTodo="checkTodo" 
     :delectTodo="delectTodo"/>
</ul>
</template>

<script>
import MyItem from './MyItem'
export default {
    name:"MyList",
    components:{
        MyItem
    },
    props:['todos','checkTodo','delectTodo']
}
</script>

<style>

</style>