<template>
    <div class="bottom-bar">
        <div class="check-b">
            <checkbutton class="selectAll" :is-checked="isCheckAll" @click.native="clickAll"/>
            <span class="all">全选</span>
        </div>
        <div class="price">
            合计：{{totalPrice}}
        </div>
        <div class="calc">
            去计算:({{checkLength}})
        </div>
    </div>
</template>

<script>
import checkbutton from '@/components/common/check/CheckButton'
export default {
    name:'CartBottomBar',
    components:{
        checkbutton
    },
    computed:{
        totalPrice(){
            return '￥'+this.$store.state.carList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkLength(){
            return this.$store.state.carList.filter(item=>item.checked).length
        },
        isCheckAll(){
            if(this.$store.state.carList.length === 0) return false
            return !(this.$store.state.carList.filter(item =>!item.checked).length)
            // return !this.$store.state.carList.find(item=>!item.checked)
        }
    },
    methods:{
        clickAll(){
            if(this.isCheckAll){//全部选中
                this.$store.state.carList.forEach(item=>item.checked=false)
            }else{//部分或全部不选中
                this.$store.state.carList.forEach(item=>item.checked=true)
            }
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        height: 40px;
        position: absolute;
        background-color: #fff;
        display: flex;
        line-height: 40px;
        bottom: 49px;
        width: 100%;
        background-color: #eee;
        font-size: 13px;
    }
    .check-b{
        width: 80px;
        display: flex;
        align-content: center;
        margin-left: 5px;
        }
        .all{
            margin-left: 5px;
        }
        .calc{
            width: 90px;
           background-color:red;
           text-align: center ;
        }
        .price{
           flex: 1;
        }
    .selectAll {
        position: relative;
        top: 10px;
        }
</style>