<template>
    <ul>
        <li>消息编号:{{id}}</li>
        <li>消息内容:{{tittle}}</li>
        <!-- <li>{{a}}</li>
        <li>{{b}}</li> -->
    </ul>
</template>

<script>
    export default {
        name:'DetailName',
        // props:['a','b']
        props:['id','tittle']
    }
</script>

<style>

</style>