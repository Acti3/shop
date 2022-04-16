<template>
  <div class="category">
      <h2>{{tittle}}分类</h2>
      <slot name="center"></slot>
      <slot name="footer"></slot>
  </div>
</template>

<script>
    export default {
        name:'CategoryName',
        props:['listData','tittle']
    }
</script>

<style>
    .category{
        background-color: rgb(109, 109, 151);
        width: 200px;
        height: 300px;
    }
    h2{
        text-align: center;
        background-color: orange;
    }
</style>