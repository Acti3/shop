<template   >
    <div class="main">
        <div class="a2">
            <div><span class="a1">0.00</span>元</div>
            <div>我的余额</div>
        </div>
       <div class="a2 a3">
            <div><span class="a1">0</span>个</div>
            <div>我的优惠</div>
        </div>
        <div class="a2">
            <div><span class="a1">0</span>元</div>
            <div>我的积分</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'AccountName',

}
</script>

<style scoped>
    .main{
        height: 70px;
        border-bottom: 10px solid rgba(100, 100, 100, .1);
        display:flex;
        background-color: #fff;
    }
    .a1{
        color: #ff5f3e;
        font-size: 24px;

    }
    .a2{
        flex: 1;
        text-align: center;
    }
    .a3{
        border-left: 1px solid rgba(100, 100, 100, .1);
        border-right: 1px solid rgba(100, 100, 100, .1);
    }
</style>