<template>
  <div id="home">
    <navbar class="home-nav"><div slot="center">购物街</div></navbar>
     <tabcontrol  class="tab-control"
                  :titles="['流行','新款','精品']" 
                  @tabClick="tabClick"
                  ref="tabControl2"
                  v-show="isTapFixd">
                  </tabcontrol>
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullUpLoad="loadMore">
     <swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></swiper>
      <recommend :recommends="recommends"></recommend>
      <feature></feature>
      <tabcontrol :titles="['流行','新款','精品']" 
                  @tabClick="tabClick"
                  ref="tabControl1">
                  </tabcontrol>
      <goodslist :goods="goods[currentType].list"/>
     </scroll>
    <backtop @click.native="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import scroll from '@/components/common/scroll/scroll'
import navbar from '@/components/common/navbar/NavBar'
import {getHomeMultiData ,getHomeGoods} from '@/network/home'
 import swiper from '@/components/common/swiper/SwiperName'
 import recommend from './childComps/Recommend'
import feature from './childComps/Feature'
import tabcontrol from '@/components/content/tabControl/TabControl'
import goodslist from '@/components/content/goods/GoodsList'
import backtop from '@/components/content/backTop/BackTop'
import {itemListenerMixin} from '@/components/common/utils/mixin'
export default {
    name:'HomeName',
    components:{
      navbar,swiper,recommend,feature,tabcontrol,goodslist,scroll,backtop
    },
    mixins:[itemListenerMixin],
    data() {
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isTapFixd:false,
        saveY:0
      }
    },
    created(){
      //1.请求多个数据
      this.getHomeMultiData()
      //请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听相关的方法
       */
      contentScroll(position){
        //判断packtop是否显示
        this.isShowBackTop=(-position.y)>1000
        //决定tabControl是否吸顶
        this.isTapFixd = (-position.y)>this.tabOffsetTop
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0,500)
      },
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
        this.$refs.tabControl1.CurrentIndex=index
        this.$refs.tabControl2.CurrentIndex=index
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabOffsetTop=this.$refs.tabControl1.$el.offsetTop
      },
      /**
       * 网络请求相关的方法
       */
      getHomeMultiData(){
        getHomeMultiData().then(res=>{
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1
        getHomeGoods(type,page).then(res=>{
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1
            //完成上拉加载更多
            this.$refs.scroll.finishPullUp()
        })
      }
    },
    mounted(){
      
    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY()
      this.$bus.$off('itemImgLoad',this.itemListenerMixin)
    }
}
</script>

<style scoped>
  .home-nav{
    background-color: pink;
    color: #fff;
    text-align: center;
    /* 在浏览器使用原生滚动时，为了让导航不跟随一起滚动  */
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index:9; */
  }
  #home{
    height: 100vh;
  }

  .content{
    position: absolute;
    overflow: hidden;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
</style>