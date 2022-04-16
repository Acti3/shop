<template>
    <div id="tab-control">
        <div v-for="(item, index) in titles" :key="index" class="tab-control-item" :class="{active:index===CurrentIndex}" @click="itemClick(index)">
                <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            CurrentIndex:0
        }
    },
    methods: {
        itemClick(index){
        this.CurrentIndex=index
        this.$emit('tabClick',index)
    }
    },
}
</script>

<style scoped>
#tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #eee;
    z-index: 9;
}
.tab-control-item{
    flex: 1;
}
.tab-control-item span{
    padding: 5px;
}
.active{
    color: rgb(206, 67, 90);
}
.active span{
    border-bottom: 3px solid rgb(206, 67, 90);
}

</style>