<template>
    <div class="cart-list">
        <scroll class="content" ref="scroll">
            <cartlistitem  v-for="(item, index) in carList" :key="index" :itemInfo="item" :i="index"/>
        </scroll>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import scroll from '@/components/common/scroll/scroll'
import cartlistitem  from './CartlistItem'
export default {
    name:'CartList',
    components:{
        scroll,
        cartlistitem
    },
    activated(){
        this.$refs.scroll.refresh()
    },
    computed:{
        ...mapGetters(['carList'])
    }
}
</script>

<style scoped>
.content{
    position: absolute;
    overflow: hidden;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 89px;
}
</style>