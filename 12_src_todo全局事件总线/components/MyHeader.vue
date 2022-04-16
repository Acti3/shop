<template>
<div class="todo-header">
    <input type="text" placeholder="请输入您的任务名称，按回车键确认" v-model="tittle"  @keyup.enter="add"/>
</div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name:"MyHeader",
    data(){
        return{
            tittle:''
        }
    },
    methods:{
        add(){
            if(!this.tittle) return 
            //将用户的输入包装成一个todo对象
            const todoObj = {id:nanoid(),name:this.tittle,done:false}
            this.$emit('addTodo',todoObj)
            this.tittle=''

        }
    }
}
</script>

<style>
.todo-header input{
width: 560px;
height: 28px;
font-size: 14px;
border: 1px solid #ccc;
border-radius: 4px;
padding: 4px 7px;
}
.todo-header input:focus{
outline: none;
border-color: rgba(82,168,236,0.8);
}
</style>