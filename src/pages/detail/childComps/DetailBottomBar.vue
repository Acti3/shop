<template>
    <div class="bottom-bar">
       <div class="bar-item bar-left">
            <div class="z"> 
                <div>
                    <div><img src="@/assets/img/kf.png" alt=""></div>
                    <span class="text">客服</span>
                </div>
                <div>
                    <div><img src="@/assets/img/dp.png" alt=""></div>
                    <span class="text">店铺</span>
                </div>
                <div>
                    <div><img src="@/assets/img/sc.png" alt=""></div>
                    <span class="text">收藏</span>
                </div>
            </div>
            <div class="bar-item">
                <div class="cart" @click="addCart">加入购物车</div>
                <div class="buy">购买</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailBottomBar',
    methods:{
        addCart(){
            this.$emit('addcart')
        }
    }
}
</script>

<style scoped>
.bottom-bar{
    height: 49px;
    background-color: #fff;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0px;
    text-align: center;
}
.bar-item{
    display: flex;
}
.bottom-bar div{
    flex: 1 ;
}
.bar-left .text{
    font-size: 13px;
}
.z img{
    width: 22px;
    height: 22px;
}
    .z{
        display: flex;
        padding-top: 5px;
    }
.cart{
    line-height: 49px;
    background-color: yellow;
}
.buy{
    line-height: 49px;
    background-color: red;
}
</style>