<template>
  <div>
    <student/>
    <hr>
    <school/>
  </div>
</template>

<script>
//引入组件
import School from './components/SchoolName'
import Student from './components/StudentName'
export default {
    name:'App',
    components:{
        Student,
        School
        },
}
</script>