<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'scrolName',
    data() {
        return {
            scroll:null,
        }
    },
    props:{
        probeType:{
            type:Number,
            default:3
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    mounted(){
        //创建BScroll对象
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,mouseWheel:true,observeDOM:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })
        //监听滚动的位置   
       if(this.probeType===2||this.probeType===3){
            this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
       }
        //监听scroll滚动到底部
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullUpLoad')
            })
        }
    },
    methods: {
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        }
    },
}
</script>

<style scoped>
    
</style>