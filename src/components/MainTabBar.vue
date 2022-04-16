<template>
  <tabbar>
        <tabbaritem path="/home" activeColor="deepPink">
          <img slot="item-icon" src="../assets/img/22.svg" alt="">
          <img slot="item-icon-active" src="../assets/img/222.svg">
          <div slot="item-text">首页</div>
        </tabbaritem>
        <tabbaritem path="/category" activeColor="deepPink">
          <img slot="item-icon" src="../assets/img/33.svg" alt="">
          <img slot="item-icon-active" src="../assets/img/333.svg" alt="">
          <div slot="item-text">目录</div>
        </tabbaritem>
        <tabbaritem path="/cart" activeColor="deepPink">
          <img slot="item-icon" src="@/assets/img/44.svg" alt="">
          <img slot="item-icon-active" src="../assets/img/444.svg" alt="">
          <div slot="item-text">购物车</div>
        </tabbaritem>
        <tabbaritem path="/profile" activeColor="deepPink">
          <img slot="item-icon" src="../assets/img/55.svg" alt="">
          <img slot="item-icon-active" src="../assets/img/555.svg" alt="">
          <div slot="item-text">我的</div>
        </tabbaritem>
      </tabbar>
</template>

<script>
import tabbar from './TabBar'
import tabbaritem from './TabBarItem'
export default {
    name:'MainTabBar',
    components:{tabbar,tabbaritem},
}
</script>

<style>

</style>