<template>
    <div class="profile">
      <navbar class="profile-nav"><div slot="center">我的档案</div></navbar>
      <userinfo/>
      <account/>
      <listinfo/>      <i class="iconfont icon-shouyefill" >

      </i>
    </div>
</template>

<script>
import navbar from '@/components/common/navbar/NavBar'
import userinfo from './childComps/UserInfo'
import account from './childComps/Account'
import listinfo from './childComps/ListInfo'
export default {
    name:'ProfileName',
    components:{
      navbar,
      userinfo,
      account,
      listinfo
    }
}
</script>

<style>
 .profile-nav{
    background-color: pink;
    color: #fff;
    text-align: center;
  }
</style>