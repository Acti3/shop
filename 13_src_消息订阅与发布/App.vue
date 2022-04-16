<template>
  <div>
    <School/>
    <Student/>
  </div>
</template>

<script>
import Student from './components/StudentName'
import School from './components/SchoolName'

export default {
  name: 'App',
  components: {
    Student,School
  }
}
</script>

<style>

</style>
