<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
            <li>
                <!-- 直接通过名字跳转 -->
                <routerLink class="list-group-item" :to="{name:'new'}" active-class="active">News</routerLink>
            </li>
            <li>
                <routerLink class="list-group-item" to="/home/messages" active-class="active">Message</routerLink>
            </li>
            </ul>
            <!-- <keep-alive include="NewsName"> -->
            <keep-alive :include="['NewsName']">
                <router-view></router-view>
            </keep-alive>    
        </div>
    </div>
</template>

<script>
    export default {
        name:'HomeName'
    }
</script>

<style>

</style>