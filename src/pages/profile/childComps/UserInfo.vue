<template>
    <div class="user-info">
        <div class="">
            <img class="z1" src="@/assets/img/wode.png" alt="">
        </div>
        <div class="info">
            <div class="logo">登录/注册</div>
            <div class="z3"><img class="z2" src="@/assets/img/shouji.png" alt="">
                <span>暂无绑定手机号</span>
            </div>
        </div>
        <div class="left">
            <img src="@/assets/img/jiantou.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'UserInfo',

}
</script>

<style scoped>
    .user-info{
        height: 70px;
        background-color: pink;
        display: flex;
        border-top: 1px solid #eee;
        padding: 0 10px;
        color: #fff;
    }
    .z1{
        width: 45px;
        height: 45px;
        border: 1px solid #eee;
        border-radius: 50%;
        background-color: #eee;
        margin-top: 12px;
    }
    .info{
        flex: 1;
        padding-left: 20px;
        margin-top: 10px;
    }
    .z2{
        width: 20px;
        height: 30px;
    }
    .left{
        line-height: 70px;
    }
    .info span{
        font-size: 13px;
        margin-left: 5px;
    }
    .z3{
        margin-top: 5px;
    }
</style>