<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{MyAge+1}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="updateAge">点我age+1</button>
    </div>  
</template>



<script>
    export default {
        data(){
                return {
                    msg:'我是一名学生',
                    // name:'张三',
                    // sex:'女',
                    // age:20
                    MyAge:this.age
                    }
            },
            methods:{
                updateAge(){
                  this.MyAge++
                }
            },
                //简单接受
            // props:['name','age','sex']
                //接受的同时对数据进行类型限制
            // props:{
            //     name:String,
            //     age:Number,
            //     sex:String
            // }
                //接收得同时对数据：进行类型限制+默认值的指定+必要性的限制
            props:{
                name:{
                    type:String,//name得类型是字符串
                    required:true//name是必要的
                },
                age:{
                    type:Number,
                    default:99  //默认值
                },
                sex:{
                    type:String,
                }
            }
    }
</script>