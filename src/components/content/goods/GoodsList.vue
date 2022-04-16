<template>
    <div class="goods-list">
        <goodslistitem v-for="(item, index) in goods" :key="index" :goodsItem="item"/>
    </div>
</template>

<script>
import goodslistitem from './GoodsListItem'
export default {
    name:'GoodsList',
    components:{goodslistitem},
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3px;
}

</style>