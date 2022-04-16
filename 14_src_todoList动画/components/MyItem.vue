<template>
  <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
            <span v-show="!todo.isEdit">{{todo.name}}</span>
            <input type="text" 
            :value="todo.name"
            v-show="todo.isEdit"
            @blur="handleBlur(todo,$event)"
            ref="inputName"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelect(todo.id)" >删除</button>
        <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
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
        },
        handleEdit(todo){
            this.$set(todo,'isEdit',true)

            this.$nextTick(function(){
                this.$refs.inputName.focus()
            })
        },
        handleBlur(todo,e){
            todo.isEdit=false
            if(!e.target.value) return alert('输入不能为空')
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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