<template>
    <div class="cart-list-item">
        <div class="item-selector">
            <checkbutton :is-checked="itemInfo.checked"  @click.native="checkClick(i)"/>
        </div>
        <div class="item-img">
            <img :src="itemInfo.image" alt="">
        </div>
        <div class="item-info">
            <div class="item-title">{{itemInfo.title}}</div>
            <div class="item-desc">{{itemInfo.desc}}</div>
            <div class="item-bottom">
                <div class="item-price left">￥{{itemInfo.price}}</div>
                <div class="item-count right">×{{itemInfo.count}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import checkbutton from '@/components/common/check/CheckButton'
import {mapGetters} from 'vuex'
export  default {
    name:'CartListItem',
    components:{
        checkbutton
    },
    props:{
        itemInfo:{
            type:Object,
            default(){
                return {}
            }
        } ,
        i:{
            type:Number
        }
    },
    methods: {
        checkClick(){
            this.$store.commit('checked',this.i)
        }
    },
    computed:{
        ...mapGetters(['carList'])
    }
}
</script>

<style>
.item-selector{
    width: 14%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.cart-list-item{
    width: 100%;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
.item-title , .item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.item-img{
    padding: 5px;
}
.item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.item-info{
    font-size: 17px;
    color: #335;
    padding: 5px 10px;
    /* position: relative; */
    overflow: hidden;
}
.item-info .item.desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
.item-bottom{
    display: flex;
    margin-top: 25px;
}
.item-bottom .item-price{
    color: orangered;
    flex: 1;
}
</style>