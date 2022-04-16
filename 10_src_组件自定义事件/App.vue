<template>
    <div class="app">
      <h1>{{msg}},学生姓名是：{{studentName}}</h1>
      <!-- 通过父组件给子组件传递函数类型props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"/>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
      <!-- <Student @atguigu="getStudentName"/> -->
      <!-- 绑定原生dom事件需要用native修饰符 -->
      <Student ref="student" @demo="m1" @click.native="show"/>
    </div>
</template>

<script>
import School from './components/SchoolName'
import Student from './components/StudentName'
export default{
  name:"App",
  components:{
    School,Student
  },
  data() {
    return {
      msg:'你好啊',
      studentName:''
    }
  },
  methods:{
    getSchoolName(name){
      console.log('app接收到了',name)
    },
    // getStudentName(name,x,y,z,g){
    //   console.log('app收到了学生名',name,x,y,z,g)
    // }
    getStudentName(name,...params){
      console.log('app收到了学生名',name,params)
      this.studentName = name
    },
    m1(){
      console.log('调用了')
    },
    show(){
      alert(123)
    }
  },
  mounted(){
    this.$refs.student.$on('atguigu',this.getStudentName)//绑定自定义事件
    // this.$refs.student.$once('atguigu',this.getStudentName)//绑定自定义事件（一次性）
  }
}
</script>

<style>
  .app{
    background-color: salmon;
  }
</style>