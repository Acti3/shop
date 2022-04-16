<template>
    <div class="datail">
        <detailnavbar class="detail-navbar" @titleClick="titleClick" ref="nav"/>
       <scroll class="contentq" 
               ref="scroll"
               :probe-type="3"
               @scroll="contentScroll">
            <detailswiper :top-images="topImages"/>
            <detailbaseinfo :goods="goods"/>
            <detailshopinfo :shop="shop"/>
            <detailgoodsinfo :detail-info="detailInfo" @imageLoad="imageLoad"/>
            <detailparamsinfo ref="params" :params-info="GoodsParams"/>
            <detailcommentinfo ref="comment" :comment-info="commentInfo"/>
            <goodslist :goods="recommendInfo" ref="recommend"/>
       </scroll>
       <detailbottombar @addcart="addToCart"/>
       <backtop @click.native="backTop" v-show="isShowBackTop"/>
    </div>
</template>

<script>
import detailnavbar from '@/pages/detail/childComps/DetailNavBar'
import detailswiper from '@/pages/detail/childComps/DetailSwiper'
import detailbaseinfo from '@/pages/detail/childComps/DetailBaseInfo'
import detailshopinfo from '@/pages/detail/childComps/DetailShopInfo'
import detailgoodsinfo from '@/pages/detail/childComps/DetailGoodsInfo'
import detailparamsinfo from '@/pages/detail/childComps/DetailParamsInfo'
import detailcommentinfo from '@/pages/detail/childComps/DetailCommentInfo'
import detailbottombar from '@/pages/detail/childComps/DetailBottomBar'

import goodslist from '@/components/content/goods/GoodsList'

import {getDetail,Goods,Shop,GoodsParams,getRecommend} from '@/network/detail'
import scroll from '@/components/common/scroll/scroll'
import backtop from '@/components/content/backTop/BackTop'

import {itemListenerMixin} from '@/components/common/utils/mixin'
import {debounce} from '@/components/common/utils/utils'
export default {
    name:'DetailName',
    mixins:[itemListenerMixin],
    components:{
        detailnavbar,
        detailswiper,
        detailbaseinfo,
        detailshopinfo,
        scroll,
        detailgoodsinfo,
        detailparamsinfo,
        detailcommentinfo,
        goodslist,
        detailbottombar,
        backtop},
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            GoodsParams:{},
            commentInfo:{},
            recommendInfo:[],
            themeTopYs:[],
            getThemetopY:null,
            currentIndex:0,
            isShowBackTop:false
        }
    },
    created(){
        //保存传入的iid
        this.iid=this.$route.params.iid
        //根据iid请求详情信息
        getDetail(this.iid).then(res=>{
            const data = res.result
            //获取顶部的图片轮廓数据
            this.topImages=data.itemInfo.topImages
            //获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //创建店铺信息的对象
            this.shop = new Shop(data.shopInfo)
            //保存商品的详情信息
            this.detailInfo = data.detailInfo
            //获取参数的信息
            this.GoodsParams = new GoodsParams(data.itemParams.info,data.itemParams.rule) 
            //获取评论信息
            if(data.rate.cRate !==0){
                this.commentInfo = data.rate.list[0]
            }
        })
        //获取推荐数据
        getRecommend().then(res=>{
            this.recommendInfo=res.data.list
        })

        //
        this.getThemetopY = debounce(()=>{
            this.themeTopYs=[]
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            this.themeTopYs.push(Number.MAX_VALUE)
        },100)
    },
    methods:{
        addToCart(){
            const product = {}
            product.image = this.topImages[0]
            product.title =  this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realprice
            product.iid  = this.iid

            this.$store.dispatch('addCart',product).then(res=>{
                this.$toast.show(res,2000)
                // console.log(this.$toast,res)
            })


        },
        imageLoad(){
            this.newRefresh()
            // this.$refs.scroll.refresh() 
            this.getThemetopY()    
        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
        },
        contentScroll(position){
            //判断backtop
            this.isShowBackTop=(-position.y)>1000   
            const positionY = -position.y
            let length = this.themeTopYs.length
            // for(let i = 0;i<length;i++){
            //     if(this.currentIndex!==i&&((i<length-1 && positionY>this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])
            //     ||(i===length-1)&&positionY>this.themeTopYs[i])){
            //         this.currentIndex=i
            //         console.log(this.currentIndex)
            //     }
            // }
            for(let  i = 0; i <length-1; i++){
                if(this.currentIndex!==i&&(positionY>=this.themeTopYs[i]&&positionY<this.themeTopYs[i+1])){
                    this.currentIndex=i
                    this.$refs.nav.currentIndex=this.currentIndex
                }
            }
        },
        backTop(){
        this.$refs.scroll.scrollTo(0,0,500)
      }
    },
    destroyed(){
        this.$bus.$off('itemImgLoad',this.itemImgListener)
    }
}
</script>

<style scoped>
.datail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
}

.contentq{
    position: absolute;
    overflow: hidden;
    top: 44px;
    right: 0;
    left: 0;
    bottom: 49px;
  }
.detail-navbar{
    position: relative;
    background-color: #fff;
    z-index: 9;
}
</style>