<template>
    <div>
        <h2>学校名称：{{name}}</h2>
        <h2 @click="show">学校地址：{{address}}</h2>
        <input type="text" v-fbind="name">
            </div>  
</template>



<script>
import {mixin} from '../mixin'
    export default {
        data(){
                return {
                    name:'首义',
                    address:'武汉'
                    }
            },
        mixins:[mixin]
    }
</script>