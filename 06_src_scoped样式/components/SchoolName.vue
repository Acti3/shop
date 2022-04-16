<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
            </div>  
</template>

<style>
    .demo{
        background-color: royalblue;
    }
</style>

<script>
    export default {
        data(){
                return {
                    name:'首义',
                    address:'武汉'
                    }
            },
    }
</script>