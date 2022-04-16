<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
            <li>
                <routerLink class="list-group-item" to="/home/news" active-class="active">News</routerLink>
            </li>
            <li>
                <routerLink class="list-group-item" to="/home/messages" active-class="active">Message</routerLink>
            </li>
            </ul>
            <router-view></router-view>
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