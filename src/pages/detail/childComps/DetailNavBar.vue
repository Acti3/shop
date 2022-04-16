<template>
    <div>
        <navbar>
            <div slot="left" class="left" @click="back">
                <img src="@/assets/img/fanhui.png" alt="">
            </div>
            <div slot="center" class="title" >
                <div v-for="(item, index) in titles" 
                    :key="index"
                    class="title-item"
                    :class="{active:index===currentIndex}"
                    @click="titleClick(index)">
                {{item}}
                </div>
            </div>
        </navbar>
    </div>
</template>

<script>
import navbar from '@/components/common/navbar/NavBar'
export default {
    name:'DetailNavBar',
    components:{navbar},
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex=index
            this.$emit('titleClick',index)
        },
        back(){
            this.$router.back()
        }
    }
}
</script>

<style>
.title{
    display: flex;
}
.title-item{
    flex: 1;
}
.left img{
    width: 19px;
    height: 19px;
    margin-left: 15px;
}
.active{
    color: rgb(212, 19, 19);
}
</style>