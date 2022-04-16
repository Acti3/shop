<template>
  <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span>{{todo.name}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelect(todo.id)" >删除</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:"MyItem",
    props:['todo'],
    methods:{
        //勾选or取消对象
        handleCheck(id){
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        //删除
        handleDelect(id){
            if(confirm('确认删除么？')){
                // this.delectTodo(id)
            // this.$bus.$emit('delectTodo',id)
            pubsub.publish('delectTodo',id)

            }
        }
    }
}
</script>

<style>
.todo-main{
margin-left: 0px;
border: 1px solid #ddd;
border-radius: 2px;
padding: 0px;
}
li{
list-style: none;
height: 36px;
line-height: 36px;
padding: 0 5px;
border-bottom: 1px solid #ddd;
}
li label{
float: left;
cursor: pointer;
}
li label li input{
vertical-align: middle;
margin-right: 6px;
position: relative;
top: -1px;
}
button{
float: right;
margin-top: 3px;
display: none;
}
li:before{
content: initial;
}
li:last-child{
border-bottom: none;
}
li:hover{
    background-color: #ddd;
}

</style>