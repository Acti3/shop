<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">把学生名给app</button>
        <button @click="unbind">解绑自定义事件</button>
    </div>  
</template>

<style>
.student{
    background-color: #dddddd;
}
</style>

<script>
    export default {
        data(){
                return {
                    name:'张三',
                    age:20
                    }
            },
            methods: {
                sendStudentName(){
                    this.$emit('atguigu',this.name,111,11,11,11)
                    // this.$emit('demo')
                    
                },
                unbind(){
                    // this.$off('atguigu')//解绑一个自定义事件
                    // this.$off(['atguigu','demo'])
                    this.$off()
                }
            },
    }
</script>