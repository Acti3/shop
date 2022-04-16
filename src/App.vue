<template>
   <div id="app">
     <keep-alive exclude="DetailName">
       <router-view/>
     </keep-alive>
     <maintabbar></maintabbar>
   </div>
</template>

<script>
import maintabbar from './components/MainTabBar'
export default {
  name:'AppName',
  components:{maintabbar},
  data(){
    return{
      
    }
  }
}
</script>
<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  
</style>