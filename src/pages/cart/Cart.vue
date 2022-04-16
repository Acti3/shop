<template>
  <div class="cart">
    <navbar class="nav-bar">
      <div slot="center">购物车({{carLength}})</div>
    </navbar>
    <carlist />
    <carbottombar></carbottombar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import navbar from '@/components/common/navbar/NavBar'
import carlist from './childComps/CartList'
import carbottombar from './childComps/CartBottomBar'
export default {
    name:'CartName',
    components:{
      navbar,
      carlist,
      carbottombar
    },
    computed:{
      // carLength(){
      //   return this.$store.state.carList.length
      // }
      ...mapGetters(['carLength','carList'])
    }
}
</script>

<style>
  .nav-bar{
    background-color: pink;
    text-align: center;
    color: #fff;
  }
</style>