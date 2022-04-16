<template>
    <div class="shop-info">
        <div class="shop-top">
            <img :src="shop.logo" alt="">
            <span class="title">{{shop.name}}</span>
        </div>
        <div class="shop-center">
            <div class="shop-center-item shop-center-left">
                <div class="info-sells">
                    <div class="sells-count">
                        {{shop.sells |sellCountFilter}}
                    </div>
                    <div class="sells-text">总销量</div>
                </div>
                <div class="info-goods">
                    <div class="goods-count">
                        {{shop.goodsCount}}
                    </div>
                    <div class="goods-text">
                        全部宝贝
                    </div>
                </div>
                </div>
                <div class="shop-center-item shop-center-right">
                    <table>
                        <tr v-for="(item, index) in shop.score" :key="index">
                            <td>{{item.name}}</td>
                            <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                            <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter? '高':'低'}}</span></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="shop-bottom">
                <div class="enter-shop">进店逛逛</div>
            </div>
    </div>
</template>

<script>
export default {
    name:'DetailShopInfo',
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        sellCountFilter(value){
            if(value<10000) return value
            return (value/1000).toFixed(1)+'万'
        }
    }
}
</script>

<style>
.shop-info{
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
}
.shop-top{
    display: flex;
    line-height: 45px;
    align-items: center;
}
.shop-top img{
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 50%;
}
.shop-top .title{
    margin-left: 10px;
}
.shop-center{
    display: flex;
    margin-top: 15px;
    align-items: center;
}
.shop-center-item{
    flex: 1;
}
.shop-center-left{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
}
.sells-count, .goods-count{
    font-size: 18px;
}
.sells-text, .goods-text{
    font-size: 12px;
}
.shop-center-right table{
    width: 120px;
    margin-left: 30px;
}
.shop-center-right table td{
    padding: 5px 0;
}
.shop-center-right .score-better{
    color: #f13e3a;
}
.shop-center-right .better-more span{
    background-color: #f13e3a;
}   
.better span{
    background-color: #5ea732;
    color: #fff;
}
.score{
    color: #5ea732;
}
.shop-bottom{
    text-align: center;
    margin-top: 10px;
}
.shop-bottom .enter-shop{
    font-size: 14px;
    display: inline-block;
    margin-top: 10px;
    width: 130px;
    background-color:#f2f5f8;
    border-radius: 10px;
    width: 150px;
    height: 30px;
    line-height: 30px;
}
</style>