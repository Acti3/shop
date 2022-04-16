<template>  
    <div id="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>

<script>
export default {
    name:'NavBarName',
}
</script>

<style scoped>
    #nav-bar{
        display: flex;
        line-height: 44px;
    }
    .left ,.right{
        width: 60px;
    }
    .center{
        flex: 1;
    }
</style>