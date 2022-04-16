<template>
    <div>
        <ul>
        <li v-for="item in messageList" :key="item.id">
            <!-- 跳转并携带params参数，to的字符串写法 -->
            <!-- <router-link to="/home/messages/detail/666/444">{{item.tittle}}</router-link> -->
            <!-- <router-link :to="`/home/messages/detail/${item.id}/${item.tittle}`">{{item.tittle}}</router-link> -->
            <router-link
            :to="{
                name:'xijie',//必须使用name
                params:{
                    id:item.id,
                    tittle:item.tittle
                }
                }">
            {{item.tittle}}
            </router-link>
            <button @click="pushShow(item)">push查看</button>
            <button @click="replaceShow(item)">replace查看</button>
        </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'MessagesName',
    data() {
        return {
            messageList:[
                {id:'001',tittle:'消息001'},
                {id:'002',tittle:'消息002'},
                {id:'003',tittle:'消息003'},
            ]
        }
    },
    methods: {
        pushShow(item){
            this.$router.push({
                name:'xijie',//必须使用name
                params:{
                    id:item.id,
                    tittle:item.tittle
                }
            })
        },
        replaceShow(item){
            this.$router.replace({
                name:'xijie',//必须使用name
                params:{
                    id:item.id,
                    tittle:item.tittle
                }
            })
        }
    },
}
</script>

<style>

</style>