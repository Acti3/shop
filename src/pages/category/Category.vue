<template>
  <div class="category">
      <navbar class="category-nav"><div slot="center">商品分类</div></navbar>
      <!-- <tabcontrol :titles="['综合','精品','销量']"
                   @tabclick="tabClick"
                   ref="tabControl2"
                   class="tab-control"/> -->
      <categorymenu :categories="categories" @getSubcategories="getSubcategories"/>
      <scroll class="content"
              ref="scroll"
              @scroll="contentScroll">
        <categorycontent :subcategories="subcategories" @imageLoad="imageLoad"/>
        <tabcontrol :titles="['综合','精品','销量']" id="tabcontrol" @tabClick="tabClick"/>
        <goodslist :goods="goods[currentType]" :key="currentType"/>
      </scroll>
      <backtop @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import categorymenu from './childComps/CategoryMenu'
import categorycontent from './childComps/CategoryContent'
import navbar from '@/components/common/navbar/NavBar'
import scroll from '@/components/common/scroll/scroll'
import goodslist from '@/components/content/goods/GoodsList'
import tabcontrol from '@/components/content/tabControl/TabControl'
import backtop from '@/components/content/backTop/BackTop'
import {getCategory,getSubcategory,getCategoryDetail} from '@/network/category'

import {itemListenerMixin} from  '@/components/common/utils/mixin'
export default {
    name:'CategoryName',
    mixins:[itemListenerMixin],
    components:{
      navbar,
      categorymenu,
      categorycontent,
      scroll,
      tabcontrol,
      goodslist,
      backtop
    },
    data() {
      return {
        listIndex:0,
        categories:[],
        subcategories:[],
        goods:{
          pop:[],
          new:[],
          sell:[]
        },
        currentType:'pop',
        isShowBackTop:false
      }
    },
    methods: {
      tabClick(index){
        switch(index){
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
        }
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
      imageLoad(){
        this.newRefresh()
      },
      contentScroll(position){
        this.isShowBackTop = (-position.y)>1000
      },
      getSubcategories(data){
        this.getSubcategory(data.maitKey)
        this.getCategoryDetail(data.miniWallkey,'pop')
        this.getCategoryDetail(data.miniWallkey,'new')
        this.getCategoryDetail(data.miniWallkey,'sell')
      },

      getSubcategory(maitKey){
          getSubcategory(maitKey).then(res=>{
          this.subcategories = res.data.list
          // console.log(res)
      })
      },
      getCategoryDetail(miniWallkey,type){
          getCategoryDetail(miniWallkey,type).then(res=>{
            this.goods[type] = res
            // console.log(res)
      })
      }
},
    mounted() {
        getCategory().then(res=>{
          this.categories = res.data.category.list
          this.getSubcategory(res.data.category.list[0].maitKey)
          this.getCategoryDetail(res.data.category.list[0].miniWallkey,'pop')
          this.getCategoryDetail(res.data.category.list[0].miniWallkey,'new')
          this.getCategoryDetail(res.data.category.list[0].miniWallkey,'sell')
        })
      },
      destroyed(){
        this.$bus.$off('itemImgLoad',this.itemImgListener)
    }
    }
</script>

<style scoped> 
  #tabcontrol{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 9;
  }
  .category-nav{
    background-color: pink;
    color: #fff;
    text-align: center;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 70px;
    right: 0;
    overflow: hidden;
  }
</style>