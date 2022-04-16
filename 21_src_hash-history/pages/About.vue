<template>
  <div>
      <h2>我是About内容</h2>
  </div>
</template>

<script>
    export default {
        name:'AboutName',
        //通过路由规则进入该组件时被调用
        beforeRouteEnter(to,from,next){
            console.log('About--beforeRouterEnter',to,from)
            if(to.meta.isAuth){
                if(localStorage.getItem('school')==='shouyi'){
                    next()
                }else{
                    alert('学校名不对')
                }
            }else{
                next()
            }
        },
        //通过路由规则离开该组件时被调用
        beforeRouteLeave(to,from,next){
            console.log('About--beforeRouterLeave',to,from)
            next()
        }
    }


</script>

<style>

</style>