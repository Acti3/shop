<template>
    <div class="list">
        <div class="list-item">
            <img src="@/assets/img/xinfeng.png" alt="">
            <span>我的消息</span>
        </div>
        <div class="list-item">
            <img src="@/assets/img/jifen.png" alt="">
            <span>积分商城</span>
        </div>
        <div class="list-item">
            <img src="@/assets/img/huangguan.png" alt="">
            <span>会员卡</span>
        </div>
        <div class="list-item">
            <img src="@/assets/img/gouwuche.png" alt="">
            <span>我的购物车</span>
        </div>
        <div class="list-item">
            <img src="@/assets/img/gouwu.png" alt="">
            <span>下载购物APP</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'ListName'
}
</script>

<style scoped>
    .list{
        font-size: 15px;
    }
    span{
        margin-left: 10px;
    }
    img{
        width: 25px;
        height: 25px;
        margin-bottom:5px ;
    }
    .list-item{
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid rgba(100, 100, 100, .1);
        padding-left: 10px;
    }
     .list-item:last-child{
         border: none;
     }
</style>