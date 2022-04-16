<template>
    <div>
        <el-carousel height="300px" >
      <el-carousel-item v-for="item in topImages" :key="item.iid">
        <h3><img :src="item" alt="" ></h3>
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
export default {
    name:'DetailSwiper',
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img{
      width: 100%;
  }
 .el-carousel__button{
   height: 5px;
   width: 5px;
   border-radius: 5px;
  }
</style>