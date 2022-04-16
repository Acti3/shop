<template >
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>  
</template>

<style>
.school{
    background-color: red;
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
            mounted(){
                this.$bus.$on('hello',(data)=>{
                    console.log('我是school组件，收到了数据',data)
                })
            },
            beforeDestroy(){
                this.$bus.$off('hello')
            }
    }
</script>