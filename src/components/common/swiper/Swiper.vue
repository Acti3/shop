<template>
  <div id="hy-swiper"> 
      <div class="swiper" @touchstart="touchStart" @touchmove="touchMove"
      @touchend="touchEnd">
    <slot></slot>
      </div>
      <slot name="indicator"></slot>
      <div class="indicator">
          <slot name="indicator" v-if="showIndicator && slideCount>1">
              <div v-for="(item,index)  in slideCount" class="indi-item" :class="{active:index===currentIndex-1}" :key="item.index"></div>
          </slot>
      </div>
  </div>
</template>

<script>
export default {
    name:'SwiperName',
    props:{
        interval:{
            type:Number,
            default:3000
        },
        animDuration:{
            type:Number,
            default:3000
        },
        moveRatio:{
            type:Number,
            default:0.25
        },
        showIndicator:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            slideCount:0,//元素个数
            totalWidth:0,//swiper的宽度
            swiperStyle:{},//swiper的样式
            currentIndex:1,//当前的index
            scrolling:false,//是否正在滚动
        }
    },
    mounted(){
        setTimeout(()=>{
            //操作dom在前后添加slide
            this.handleDom()

            //开启定时器
            this.startTimer()
        },200)
    },
    methods: {
        //定时器操作
        startTimer(){
            this.playTimer = window.setInterval(()=>{
                this.currentIndex++
                this.scrollContent(-this.currentIndex*this.totalWidth)
            },this.interval)
        },
        stopTimer(){
            window.clearInterval(this.playTimer)
        },
        //滚动到正确的位置
        scrollContent(currentPosition){
            //设置正在滚动
            this.scrolling = true

            //开始滚动动画
            this.swiperStyle.transition='transform'+this.animDuration+'ms'
            this.setTransform(currentPosition)

            //判断滚动到的位置
            this.checkPosition()

            //滚动完成
            this.scrolling = false
        },
        //校验正确的位置
        checkPosition(){
            window.setTimeout(()=>{
                //校验正确的位置
                this.swiperStyle.transition = '0ms'
                if(this.currentIndex>=this.slideCount+1){
                    this.currentIndex=1
                    this.setTransform(-this.currentIndex*this.totalWidth)
                }else if(this.currentIndex<=0){
                    this.currentIndex = this.slideCount
                    this.setTransform(-this.currentIndex*this.totalWidth)
                }

                //结束移动后的回调
                this.$emit('transitionEnd',this.currentIndex-1)
            },this.animDuration)
        },
        setTransform(position){
            this.swiperStyle.transform=`translated3d(${position}px,0,0)`
            this.swiperStyle['-webkit-transform']=`translated3d(${position}px,0,0)`
            this.swiperStyle['-ms-transform']=`translated3d(${position}px,0,0)`
        },
        //操作dom 在dom前后添加slide
        handleDom(){
            let swiperEl=document.querySelector('.swiper')
            let slidesEls=swiperEl.getElementsByClassName('slide')

            //保存个数
            this.slideCount=slidesEls.length

            //如果大于一个，就在前后分别添加一个slide
            if(this.slideCount>1){
                let cloneFirst = slidesEls[0].cloneNode(true)
                let cloneLast = slidesEls[this.slideCount-1].cloneNode(true)
                swiperEl.insertBefore(cloneLast,slidesEls[0])
                swiperEl.appendChild(cloneFirst)
                this.totalWidth = swiperEl.offsetWidth
                this.swiperStyle = swiperEl.style
            }

            this.setTransform(-this.totalWidth)
        },
        //拖动时间的处理
        touchStart(e){
            //如果正在滚动，不可以拖动
            if(this.scrolling) return
            //停止定时器
            this.stopTimer()
            //保存开始滚的位置
            this.startX=e.touches[0].pageX
        },
        touchMove(e){
            this.currentX=e.touches[0].pageX
            this.distance=this.currentX-this.startX
            let currentPosition=-this.currentIndex*this.totalWidth
            let moveDistance = this.distance+currentPosition

            this.setTransform(moveDistance)
        },
        touchEnd(){
            let currentMove = Math.abs(this.distance)

            if(this.distance===0){
                return
            }else if(this.distance>0&&currentMove>this.totalWidth*this.moveRatio){
                this.currentIndex--
            }else if(this.distance<0&&currentMove>this.totalWidth*this.moveRatio){
                this.currentIndex++
            }
            this.scrollContent(-this.currentIndex*this.totalWidth)
            this.startTimer()
        },
        previous(){
                this.changeItem(-1)
            },
        next(){
            this.changeItem(1)
        },
        changeItem(num){
            this.stopTimer()
            this.currentIndex+=num
            this.scrollContent(-this.currentIndex*this.totalWidth)
            this.startTimer()
        }
    },
}
</script>

<style scoped>
#hy-swiper{
    overflow: hidden;
    position: relative;
}
.swiper{
    display: flex;
}
.indicator{
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
}
.indi-item{
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
}
.indi-item.active{
    background-color: rgba(212, 62, 46, 1.0);
}
</style>>

</style>