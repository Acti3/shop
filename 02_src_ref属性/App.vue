<template>
  <div>
    <h1 ref="tittle">{{msg}}</h1>
    <button @click="show">点我输出上方的DOM元素</button>
    <School></School>
  </div>
</template>

<script>
//引入组件
import School from './components/SchoolName'
export default {
    name:'App',
    components:{
        School
        },
        data(){
         return { msg:'欢迎学习Vue'}
        },
        methods:{
          show(){
            // console.log(document.getElementById('tittle'))
            console.log(this.$refs.tittle)
          }
        }
}
</script>