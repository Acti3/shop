<template>
    <div class="demo">
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>  
</template>
// scoped让样式在局部生效，防止冲突
<style scoped>
    .demo{
        background-color: red;
    }
</style>


<script>
    export default {
        data(){
                return {
                    msg:'我是一名学生',
                    name:'张三',
                    age:20
                    }
            },
    }
</script>