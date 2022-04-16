<template>
    <div>
        <h1>{{msg | mySlice}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2 @click="show">学生年龄：{{age}}</h2>
    </div>  
</template>



<script>
import {mixin} from '../mixin'
    export default {
        data(){
                return {
                    msg:'我是一名学生',
                    name:'张三',
                    age:20
                    }
            },
        mixins:[mixin]
    }
</script>