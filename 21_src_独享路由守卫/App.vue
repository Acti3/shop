<template>
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header"><h2>Vue router Demo</h2></div>
          <button @click="forward">前进</button>
          <button @click="back">后退</button>
          <button @click="go">go</button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- 原始html中我们使用a标签实现页面的跳转 -->
            <!-- <a href="./about.html" class="list-group-item">About</a>
            <a href="./home.html" class="list-group-item">Home</a> -->
            <!-- Vue借助router-link标签实现路由的切换 -->
            <routerLink to="/about" class="list-group-item" active-class="active">About</routerLink>
            <routerLink to="/home" class="list-group-item" active-class="active">Home</routerLink>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 组建的呈现位置 -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:'App',
  methods: {
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    go(){
      this.$router.go(2)
    }
  },
}
</script>

<style>

</style>