<template>
    <div class="params-info">
        <table  v-for="(item, index) in paramsInfo.sizes" :key="index" class="info-size">
            <tr v-for="(tr, indey) in item" :key="indey">
                <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
            </tr>
        </table>
        <table class="info-param">
            <tr v-for="(item, index) in paramsInfo.infos" :key="index">
                <td class="info-param-key">{{item.key}}</td>
                <td class="info-param-value">{{item.value}}</td>
            </tr>
        </table>
        <div class="info-img" v-if="paramsInfo.image">
            <img :src="paramsInfo.image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailParamsInfo',
    props:{
        paramsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.params-info{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}
.params-info table{
    width: 100%;
    border-collapse: collapse;
}

.params-info table tr td{
    height: 42px;
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.info-param-key{
    width: 95px;
}
.info-param{
    border-top: 1px solid rgba(0,0,0,.1);
}
.info-img img{
    width: 100%;
}
</style>