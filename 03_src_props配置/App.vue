<template>
  <div>
    <student name="张三" sex="女" :age="50"/>
  </div>
</template>

<script>
//引入组件
import Student from './components/StudentName'
export default {
    name:'App',
    components:{
        Student
        },
}
</script>