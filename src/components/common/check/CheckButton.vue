<template>
        <div class="icon-selector" :class="{'selector-active':isChecked}" >
                <!-- <img v-show="!isChecked" src="@/assets/img/check1.png" alt="">
                <img v-show="isChecked" src="@/assets/img/check2.png" alt="" > -->
                <img  src="@/assets/img/tick.svg" alt="" class="logo">
            </div>
</template>

<script>
export default {
    name:'CheckButton',
    props:{
        isChecked:{
            type:Boolean,
            default:true
        } 
    }
    }
</script>

<style scoped>
.icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;

  }
  .selector-active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
  .logo{
      position: absolute;
  }
</style>