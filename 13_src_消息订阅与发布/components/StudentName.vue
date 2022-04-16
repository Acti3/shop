<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">把学生的名字给学校</button>
    </div>  
</template>

<style>
.student{
    background-color: #dddddd;
}
</style>

<script>
    import pubsub from 'pubsub-js'
    export default {
        data(){
                return {
                    name:'张三',
                    age:20
                    }
            },
            methods:{
                sendStudentName(){
                    // this.$bus.$emit('hello',this.name)
                    pubsub.publish('hello',this.name)
                }
            }
    
    }
</script>