<template>
    <div class="app">
      <h1>{{msg}}</h1>
      <Student/>
      <School/>
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
    }
  }
}
</script>

<style>
  .app{
    background-color: salmon;
  }
</style>