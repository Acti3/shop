<template>
<div id="app">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo"/>
      <MyList  :todos="todos" :checkTodo="checkTodo" :delectTodo="delectTodo"/>
      <MyFooter :todos="todos" :checkAlltodo="checkAlltodo" :clearAlltodo="clearAlltodo"/>
    </div>
  </div>
</div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'
export default{
  name:"App",
  methods:{
    //添加一个todo
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选一个todo
    checkTodo(id){
      this.todos.forEach((todo)=>{
        if(todo.id===id) todo.done=!todo.done
      })
    },
    //删除一个todo
    delectTodo(id){
      this.todos=this.todos.filter((todo)=>{
        return todo.id !== id
      })
    },
    //全选or全不选
    checkAlltodo(done){
      this.todos.forEach((todo)=>{
        todo.done = done
      })
    },
    clearAlltodo(){
      this.todos=this.todos.filter((todo)=>{
        return !todo.done
      })
    }
  },
  components:{
    MyHeader,MyList,MyFooter
  },
  data(){
        return {
            todos:JSON.parse(localStorage.getItem('todos'))||[]
                // {id:"001",name:"吃饭",done:true},
                // {id:"002",name:"睡觉",done:false},
                // {id:"003",name:"打豆豆",done:true}
                
            
        }
    },
    watch:{
      todos:{
        deep:true,
        handler(value){
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    }
}
</script>

<style>
body{
background-color: #fff;
}
.btn{
display: inline-block;
padding: 4px 12px;
margin-bottom: 0;
font-size: 14px;
line-height: 20px;
text-align: center;
vertical-align: middle;
cursor: pointer;
box-shadow: inset 0 1px rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
border-radius: 4px;
}
.btn-danger{
color: #fff;
background-color: #da4f49;
border: 1px solid #bd362f;
}
.btn-danger:hover{
color: #fff;
background-color: #bd362f;
}
.btn:focus{
outline: none;
}
.todo-container{
width: 600px;
margin: 0 auto;
}
.todo-container .todo-wrap{
padding: 10px;
border: 1px solid #ddd;
border-radius: 5px;
}
</style>