<template>
    <div>
        <el-carousel height="150px">
      <el-carousel-item v-for="item in banners" :key="item.title">
        <img :src="item.image" alt="" @load="imageLoad" >
      </el-carousel-item>
    </el-carousel>
    </div>
</template>

<script>
export default {
name:'SwiperName',
data() {
  return {
    isLoad:false
  }
},
methods: {
  imageLoad(){
    if(!this.isLoad){
      this.$emit('swiperImageLoad')
      this.isLoad=true
    }
  }
},
props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style scoped>
  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  img{
      width: 100%;
  }
</style>