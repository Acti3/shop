<template>
    <div class="goods-info" v-if="Object.keys(detailInfo).length!==0">
        <div class="info-desc vlear-fix">
            <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
    </div>
    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
        <div class="info-key">{{item.key}}</div>
        <div class="info-list">
        <img :src="item" alt="" v-for="(item, index) in item.list" :key="index" @load="imgLoad">
    </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'DetailGoodsInfo',
    props:{
        detailInfo:{
            type:Object,
        }
    },
    methods:{
        imgLoad(){
            // if(++this.counter===this.detailInfo.detailImage[0].list.length){
                this.$emit('imageLoad')
            // }
        },
       
    },
    data() {
        return {
            counter:0,
            imagesLength:0
        }
    },
}
</script>

<style scoped>
    .goods-info{
        padding: 20px 0;
        border-bottom: 5px solid #f2f5f8;
    }
    .desc{
        font-size: 13px;
        padding: 10px 10px;
    }
    .info-list img{
        margin-top: 5px;
    }
    .start{
        width: 90px;
        border-top: 1px solid rgb(201, 199, 199);
        float: left;
    }
    .end{
        width: 90px;
        border-top: 1px solid rgb(201, 199, 199);
        float: right;
    }
    .info-key{
        padding: 10px 0 0 10px
    }
</style>