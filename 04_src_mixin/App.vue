<template>
  <div>
    <student/>
    <hr>
    <school/>
  </div>
</template>

<script>
//引入组件
import Student from './components/StudentName'
import School from './components/SchoolName'
export default {
    name:'App',
    components:{
        Student,
        School
        },
}
</script>