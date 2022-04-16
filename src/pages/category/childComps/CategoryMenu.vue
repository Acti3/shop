<template>
    <scroll class="scroll-menu">
        <div class="menu-list">
            <div v-for="(item, index) in categories" 
                :key="index"
                class="menu-list-item"
                :class="{active:index===listIndex}"
                @click="itemClick(index,item.maitKey,item.miniWallkey)">
                {{item.title}}
            </div>
        </div>
    </scroll>
</template>

<script>
import scroll from '@/components/common/scroll/scroll'
export default {
    name:'CategoryMenu',
    components:{
        scroll
    },
    data() {
        return {
            listIndex:0
        }
    },
    props:{
        categories:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
      itemClick(index,maitKey,miniWallkey){
        this.listIndex = index
        const data = {
          index,maitKey,miniWallkey
        }
        this.$emit('getSubcategories',data)
        
      }
    } 
}
</script>

<style scoped>
    .scroll-menu{
        position: absolute;
        top: 44px;
        bottom: 49px;
        right: 0;
        left: 0;
        overflow: hidden;
        background-color: #f6f6f6;
        width: 70px;
    }
    .active{
        color: pink;
        font-weight: 400;
        border-left: 3px solid deeppink;
    }
    .menu-list-item{
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        text-align: center;
    }
</style>